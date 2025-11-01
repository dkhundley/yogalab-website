/**
 * MomenceWidget Component
 * 
 * This component embeds the Momence booking/scheduling widget using their hybrid plugin v2.
 * Based on the implementation from the existing Yoga Lab website.
 * 
 * The actual embed code from theyogalab.org:
 * <div id="ribbon-schedule"></div>
 * <script
 *   id="ribbon-schedule-view-scriptroot"
 *   src="https://momence.com/v2.0/hybrid-plugin-v2.js"
 *   data-host="21508"
 *   data-token="635f931146"
 * ></script>
 */

import { useEffect, useRef } from 'react';

export default function MomenceWidget() {
  const MOMENCE_BUSINESS_ID = '21508';
  const MOMENCE_TOKEN = '635f931146';
  const USE_MOCK = false; // Set to true to show placeholder
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!USE_MOCK && !scriptRef.current) {
      // Load Momence hybrid plugin v2 script dynamically
      const script = document.createElement('script');
      script.id = 'ribbon-schedule-view-scriptroot';
      script.src = 'https://momence.com/v2.0/hybrid-plugin-v2.js';
      script.setAttribute('data-host', MOMENCE_BUSINESS_ID);
      script.setAttribute('data-token', MOMENCE_TOKEN);
      
      document.body.appendChild(script);
      scriptRef.current = script;

      return () => {
        // Cleanup script on unmount
        if (scriptRef.current && document.body.contains(scriptRef.current)) {
          document.body.removeChild(scriptRef.current);
          scriptRef.current = null;
        }
      };
    }
  }, [MOMENCE_BUSINESS_ID, MOMENCE_TOKEN, USE_MOCK]);

  if (USE_MOCK) {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-white">
          <h2 className="text-xl font-bold">Yoga Lab Booking</h2>
          <p className="text-sm text-purple-100 mt-1">Powered by Momence</p>
        </div>
        
        <div className="p-8">
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking Widget Placeholder</h3>
            <p className="text-gray-600 mb-4">
              Set USE_MOCK = false to display the actual Momence booking calendar
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Actual Momence booking widget implementation
  // The script is loaded in useEffect, and it will populate this div
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden p-6">
      <div id="ribbon-schedule" className="min-h-[600px]"></div>
    </div>
  );
}
