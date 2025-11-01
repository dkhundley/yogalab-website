/**
 * MomenceWidget Component
 * 
 * This component handles the embedding of the Momence booking widget.
 * 
 * TODO: Replace mock implementation with actual Momence widget once credentials are received.
 * 
 * Integration Instructions:
 * 1. Log into your Momence account dashboard
 * 2. Navigate to Settings > Website Plugins > Booking Widget
 * 3. Copy the embed code provided by Momence
 * 4. Replace the mock content below with the actual iframe or script embed
 * 
 * Typical Momence embed format:
 * <iframe 
 *   src="https://momence.com/m/[YOUR-BUSINESS-ID]" 
 *   width="100%" 
 *   height="800px"
 *   frameBorder="0"
 * />
 * 
 * Or with script tag:
 * <script src="https://momence.com/plugin/[YOUR-BUSINESS-ID].js"></script>
 * <div id="momence-widget"></div>
 */

export default function MomenceWidget() {
  // TODO: Replace with actual Momence business ID once available
  const MOMENCE_BUSINESS_ID = 'YOUR-BUSINESS-ID-HERE';
  const USE_MOCK = true; // Set to false once real credentials are added

  if (USE_MOCK) {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Mock Widget Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-white">
          <h2 className="text-xl font-bold">Yoga Lab Booking</h2>
          <p className="text-sm text-purple-100 mt-1">Powered by Momence</p>
        </div>
        
        {/* Mock Widget Content */}
        <div className="p-8">
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Momence Widget Placeholder</h3>
            <p className="text-gray-600 mb-4 max-w-md mx-auto">
              The interactive booking calendar will appear here once integrated with your Momence account.
            </p>
            <div className="bg-white rounded-md p-4 max-w-md mx-auto text-left">
              <p className="text-sm text-gray-700 mb-2"><strong>Integration Steps:</strong></p>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Obtain Momence Business ID from your account</li>
                <li>Get the embed code from Momence dashboard</li>
                <li>Update the MOMENCE_BUSINESS_ID constant</li>
                <li>Set USE_MOCK to false</li>
              </ol>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Typical embed format: <code className="bg-gray-200 px-2 py-1 rounded text-xs">
                &lt;iframe src="https://momence.com/m/[business-id]"&gt;
              </code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Actual Momence widget implementation
  // Uncomment and modify based on the actual embed code from Momence
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <iframe 
        src={`https://momence.com/m/${MOMENCE_BUSINESS_ID}`}
        width="100%" 
        height="800px"
        frameBorder="0"
        title="Momence Booking Widget"
        className="w-full"
      />
    </div>
  );
}
