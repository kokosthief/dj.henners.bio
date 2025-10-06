'use client';
import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaPaperPlane, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import Button from '@/components/buttons/Button';

interface ContactFormProps {
  mode?: 'dark' | 'light';
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  eventType: string;
  eventDate: string;
  venue: string;
  location: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  mode = 'light',
  className = '' 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    venue: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Booking Inquiry: ${formData.eventType} - ${formData.eventDate}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Venue: ${formData.venue}
Location: ${formData.location}

Message:
${formData.message}

---
Sent via DJ Henners booking form
      `);
      
      const mailtoLink = `mailto:dj@henners.bio?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          eventType: '',
          eventDate: '',
          venue: '',
          location: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-lg border transition-all duration-300
    ${mode === 'dark' 
      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20' 
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
    }
    focus:outline-none
  `;

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Book DJ Henners
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Ready to create an unforgettable ecstatic dance experience? Let's discuss your event.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className={`
        p-8 rounded-xl shadow-lg border
        ${mode === 'dark' 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
        }
      `}>
        
        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800">
            <p className="font-medium">Thank you for your inquiry!</p>
            <p className="text-sm">Your email client should have opened with your booking details. If not, please email dj@henners.bio directly.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-300 text-red-800">
            <p className="font-medium">Something went wrong.</p>
            <p className="text-sm">Please try again or email dj@henners.bio directly.</p>
          </div>
        )}

        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              <FaUser className="inline mr-2" />
              Full Name *
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
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              <MdEmail className="inline mr-2" />
              Email Address *
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

        {/* Event Type and Date Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Event Type *
            </label>
            <select
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleInputChange}
              className={inputClasses}
            >
              <option value="">Select event type</option>
              <option value="Ecstatic Dance">Ecstatic Dance</option>
              <option value="Conscious Dance">Conscious Dance</option>
              <option value="Festival">Festival</option>
              <option value="Workshop/Retreat">Workshop/Retreat</option>
              <option value="Private Event">Private Event</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              <FaCalendarAlt className="inline mr-2" />
              Event Date *
            </label>
            <input
              type="date"
              name="eventDate"
              required
              value={formData.eventDate}
              onChange={handleInputChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Venue and Location Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Venue Name
            </label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
              placeholder="Venue or space name"
              className={inputClasses}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              <FaMapMarkerAlt className="inline mr-2" />
              Location *
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleInputChange}
              placeholder="City, Country"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Additional Details
          </label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me more about your event, audience size, budget considerations, special requirements, or any questions you have..."
            className={inputClasses}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            variant={mode === 'dark' ? 'light' : 'dark'}
            leftIcon={FaPaperPlane}
            isLoading={isSubmitting}
            className="px-8 py-4 text-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? 'Sending...' : 'Send Booking Inquiry'}
          </Button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            This will open your email client with your inquiry details
          </p>
        </div>
      </form>

      {/* Additional Contact Info */}
      <div className={`
        mt-8 p-6 rounded-lg text-center
        ${mode === 'dark' 
          ? 'bg-gray-800/50 border border-gray-700' 
          : 'bg-gray-50 border border-gray-200'
        }
      `}>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Prefer to reach out directly?
        </p>
        <p className="font-medium">
          <a 
            href="mailto:dj@henners.bio" 
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            dj@henners.bio
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;