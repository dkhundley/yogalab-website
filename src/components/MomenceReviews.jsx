/**
 * MomenceReviews Component
 * 
 * This component handles the embedding of the Momence reviews widget.
 * 
 * Integration Instructions:
 * 1. Log into your Momence account dashboard
 * 2. Navigate to Settings > Website Plugins > Reviews Widget
 * 3. Copy the embed code provided by Momence
 * 4. Replace the MOMENCE_BUSINESS_ID with your actual business ID
 * 5. Set USE_MOCK to false to display the actual reviews
 * 
 * Typical Momence reviews embed format:
 * <iframe 
 *   src="https://momence.com/reviews/[YOUR-BUSINESS-ID]" 
 *   width="100%" 
 *   height="600px"
 *   frameBorder="0"
 * />
 * 
 * Or:
 * <script src="https://momence.com/plugin/reviews-[YOUR-BUSINESS-ID].js"></script>
 * <div id="momence-reviews"></div>
 */

import { useEffect } from 'react';

export default function MomenceReviews() {
  // TODO: Replace with actual Momence business ID once available
  const MOMENCE_BUSINESS_ID = 'YOUR-BUSINESS-ID-HERE';
  const USE_MOCK = true; // Set to false once real credentials are added

  useEffect(() => {
    if (!USE_MOCK) {
      // Load Momence reviews script dynamically
      const script = document.createElement('script');
      script.src = `https://momence.com/plugin/reviews-${MOMENCE_BUSINESS_ID}.js`;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        document.body.removeChild(script);
      };
    }
  }, [MOMENCE_BUSINESS_ID, USE_MOCK]);

  if (USE_MOCK) {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Mock Widget Notice */}
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
            <p className="text-gray-600 mb-4 max-w-md mx-auto">
              Your authentic Momence reviews will appear here once integrated with your account.
            </p>
            
            <div className="bg-white rounded-md p-6 max-w-2xl mx-auto text-left space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Integration Options:</p>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs font-medium text-gray-700 mb-1">Option 1: iframe Embed</p>
                    <code className="text-xs text-gray-600 block whitespace-pre-wrap break-all">
{`<iframe 
  src="https://momence.com/reviews/[YOUR-BUSINESS-ID]" 
  width="100%" 
  height="600px"
  frameBorder="0"
/>`}
                    </code>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs font-medium text-gray-700 mb-1">Option 2: JavaScript Widget</p>
                    <code className="text-xs text-gray-600 block whitespace-pre-wrap break-all">
{`<script src="https://momence.com/plugin/reviews-[YOUR-BUSINESS-ID].js"></script>
<div id="momence-reviews"></div>`}
                    </code>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">Setup Steps:</p>
                <ol className="text-xs text-gray-600 space-y-1 list-decimal list-inside">
                  <li>Log into your Momence dashboard</li>
                  <li>Go to Settings → Website Plugins → Reviews Widget</li>
                  <li>Copy your business ID or embed code</li>
                  <li>Update MOMENCE_BUSINESS_ID in MomenceReviews.jsx</li>
                  <li>Set USE_MOCK = false</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Actual Momence reviews implementation
  // Method 1: Using iframe embed
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <iframe 
        src={`https://momence.com/reviews/${MOMENCE_BUSINESS_ID}`}
        width="100%" 
        height="600px"
        frameBorder="0"
        title="Momence Reviews Widget"
        className="w-full"
        allow="fullscreen"
      />
    </div>
  );

  // Method 2: Using JavaScript widget (alternative implementation)
  // Uncomment this section if Momence provides a JavaScript-based widget instead
  /*
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden p-6">
      <div id="momence-reviews" className="min-h-[400px]">
        <div className="text-center py-12 text-gray-500">
          Loading reviews...
        </div>
      </div>
    </div>
  );
  */
}
