/**
 * MomenceReviews Component
 * 
 * This component embeds the Momence reviews widget using their JavaScript plugin.
 * Based on the implementation from the existing Yoga Lab website.
 * 
 * The actual embed code from theyogalab.org:
 * <script
 *   async
 *   type="module"
 *   host_id="21508"
 *   is_profile_picture_enabled="true"
 *   is_text_only_enabled="true"
 *   layout="vertical"
 *   signature="4ccf0200f660489ed45d70b20658c345ef55e5e3d3217bc8c421cc738e6d07da"
 *   src="https://momence.com/plugin/reviews/reviews.js">
 * </script>
 * <div id="momence-plugin-reviews"></div>
 */

import { useEffect, useRef } from 'react';

export default function MomenceReviews() {
  const MOMENCE_BUSINESS_ID = '21508';
  const SIGNATURE = '4ccf0200f660489ed45d70b20658c345ef55e5e3d3217bc8c421cc738e6d07da';
  const USE_MOCK = false; // Set to true to show placeholder
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!USE_MOCK && !scriptRef.current) {
      // Load Momence reviews script dynamically with all required attributes
      const script = document.createElement('script');
      script.async = true;
      script.type = 'module';
      script.setAttribute('host_id', MOMENCE_BUSINESS_ID);
      script.setAttribute('is_profile_picture_enabled', 'true');
      script.setAttribute('is_text_only_enabled', 'true');
      script.setAttribute('layout', 'vertical');
      script.setAttribute('signature', SIGNATURE);
      script.src = 'https://momence.com/plugin/reviews/reviews.js';
      
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
  }, [MOMENCE_BUSINESS_ID, SIGNATURE, USE_MOCK]);

  if (USE_MOCK) {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-white">
          <h3 className="text-lg font-semibold">Momence Reviews Widget</h3>
          <p className="text-sm text-purple-100 mt-1">Live reviews will display here</p>
        </div>
        
        <div className="p-8">
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Reviews Widget Placeholder</h4>
            <p className="text-gray-600 mb-4">
              Set USE_MOCK = false to display actual Momence reviews
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Actual Momence reviews implementation
  // The script is loaded in useEffect, and it will populate this div
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden p-6">
      <style>
        {`
          :root {
            --momenceReviewColorBackground: #FBFBFB;
            --momenceBorder: 1px solid rgba(0, 0, 0, 0.08);
            --momenceBorderRadius: 8px;
            --momenceBoxShadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <div id="momence-plugin-reviews" className="min-h-[400px]"></div>
    </div>
  );
}
