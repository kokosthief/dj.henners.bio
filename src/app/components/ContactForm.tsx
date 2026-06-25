'use client';
import React, { useRef, useState } from 'react';
import { FaPaperPlane, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import Button from '@/components/buttons/Button';

import { trackEvent } from '../analytics';

interface ContactFormProps {
  mode?: 'dark' | 'light';
  className?: string;
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  website: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  mode = 'light',
  className = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const hasTrackedStart = useRef(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (!hasTrackedStart.current && name !== 'website') {
      hasTrackedStart.current = true;
      trackEvent('contact_form_start', {
        event_label: 'homepage_contact_form',
        field_name: name,
      });
    }
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');
    trackEvent('contact_form_submit_attempt', {
      event_label: 'homepage_contact_form',
      message_length: formData.message.length,
    });

    try {
      const response = await window.fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Could not send message.');
      }

      setSubmitStatus('success');
      setStatusMessage('Sent — I’ll reply when I’ve seen it.');
      trackEvent('contact_form_submit', {
        event_label: 'homepage_contact_form',
        message_length: formData.message.length,
      });
      trackEvent('close_convert_lead', {
        event_label: 'homepage_contact_form',
        lead_type: 'booking_inquiry',
        message_length: formData.message.length,
      });
      setFormData({ name: '', email: '', message: '', website: '' });
      onSuccess?.();
    } catch (error) {
      setSubmitStatus('error');
      const message = error instanceof Error ? error.message : 'Could not send message. Please try again later.';
      setStatusMessage(message);
      trackEvent('contact_form_error', {
        event_label: 'homepage_contact_form',
        error_message: message.slice(0, 120),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `
    w-full rounded-xl border px-4 py-3 text-base transition-all duration-300
    ${mode === 'dark'
      ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
    }
    focus:outline-none
  `;

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      {submitStatus === 'success' && (
        <div className="mb-5 rounded-lg border border-green-300 bg-green-100 p-4 text-green-800">
          <p className="font-medium">Message sent.</p>
          <p className="text-sm">{statusMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-5 rounded-lg border border-red-300 bg-red-100 p-4 text-red-800">
          <p className="font-medium">Something went wrong.</p>
          <p className="text-sm">{statusMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaUser className="mr-2 inline" />
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            <MdEmail className="mr-2 inline" />
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-4 hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message *
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Say hello, send a booking idea, ask for a mix, whatever."
          className={inputClasses}
        />
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant={mode === 'dark' ? 'light' : 'dark'}
          leftIcon={FaPaperPlane}
          isLoading={isSubmitting}
          className="w-full px-6 py-4 text-base shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl sm:w-auto sm:px-8 sm:text-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
