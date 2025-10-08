'use client';
import React from 'react';
import { FaDownload } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';

interface TechnicalRiderProps {
  mode?: 'dark' | 'light';
  showDownloadButton?: boolean;
}

const TechnicalRider: React.FC<TechnicalRiderProps> = ({
  mode = 'light',
  showDownloadButton = true
}) => {

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/downloads/documents/technical-rider.pdf';
    a.download = 'DJ-Henners-Technical-Rider.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            TECHNICAL RIDER
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-4"></div>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          DJ HENNERS
        </h2>
        <div className="text-gray-600 dark:text-gray-400">
          Ecstatic Dance DJ | Amsterdam, Netherlands
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Email: dj@henners.bio | SoundCloud: https://soundcloud.com/hennerrsss
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">

        {/* DJ Set Requirements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white" id="requirements-section">
            DJ SET REQUIREMENTS
          </h2>

          {/* Audio Equipment */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400" id="audio-equipment">
              Audio Equipment
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                A professional light and sound setup that suits the range of my music
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                Pioneer DJM-900NXS2 mixer (or newer model)
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                Three (3x) Pioneer CDJ-3000 players (updated with the latest firmware) or CDJ-2000NXS2's
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                4 LAN connector cables to connect the mixer and the 3 CDJs
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                1 x switch box for the LAN connector cables
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                Stereo booth monitors
              </li>
            </ul>
          </div>

          {/* Technical Support */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400" id="technical-support">
              Technical Support
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                A sound engineer on-site before and during my set
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                A stage contact/FOH to assist with setup/soundcheck
              </li>
            </ul>
          </div>

          {/* Hospitality */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400" id="hospitality">
              Hospitality
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                Water (still/sparkling), tea, and some fresh fruit in the booth
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                One clean towel in the booth
              </li>
            </ul>
          </div>

          {/* Additional Notes */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400" id="additional-notes">
              Additional Notes
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>• Please ensure all equipment is tested and working prior to the event</li>
              <li>• Setup time required: 30 minutes for soundcheck</li>
              <li>• Any questions regarding technical specifications should be directed to dj@henners.bio</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Thank you for ensuring these requirements are met for an optimal performance experience.
          </p>
          <div className="font-semibold text-gray-800 dark:text-white">
            DJ Henners<br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Amsterdam, Netherlands</span>
          </div>
        </div>
      </div>

      {/* Download Button */}
      {showDownloadButton && (
        <div className="text-center mt-8">
          <Button
            variant={mode === 'dark' ? 'light' : 'dark'}
            leftIcon={FaDownload}
            onClick={handleDownload}
            className="px-8 py-4 text-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            aria-label="Download Technical Rider PDF"
          >
            Download Technical Rider
          </Button>
        </div>
      )}
    </div>
  );
};

export default TechnicalRider;