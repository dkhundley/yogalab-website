import { useState, useRef, useEffect } from 'react';

export default function Order() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFullscreenSupported, setIsFullscreenSupported] = useState(true);
  const iframeContainerRef = useRef(null);

  useEffect(() => {
    // Check if fullscreen API is supported
    const element = iframeContainerRef.current;
    const supported = !!(
      element?.requestFullscreen ||
      element?.webkitRequestFullscreen ||
      element?.mozRequestFullScreen ||
      element?.msRequestFullscreen
    );
    setIsFullscreenSupported(supported);
  }, []);

  const toggleFullScreen = () => {
    const element = iframeContainerRef.current;
    if (!element) return;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      // Try standard fullscreen API first
      if (element.requestFullscreen) {
        element.requestFullscreen().then(() => {
          setIsFullScreen(true);
        }).catch((err) => {
          console.error('Error attempting to enable fullscreen:', err);
        });
      }
      // Fallback for Safari/iOS
      else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
        setIsFullScreen(true);
      }
      // Fallback for Firefox
      else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        setIsFullScreen(true);
      }
      // Fallback for IE/Edge
      else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        setIsFullScreen(true);
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullScreen(false);
        });
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        setIsFullScreen(false);
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        setIsFullScreen(false);
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  // Listen for fullscreen changes (e.g., user presses ESC)
  const handleFullScreenChange = () => {
    setIsFullScreen(!!(document.fullscreenElement || document.webkitFullscreenElement));
  };

  return (
    <div className="bg-white font-montserrat">
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-black">ORDER AHEAD</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lab Coffee Online Ordering
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Skip the line! Order your favorite coffee, tea, or açai bowl ahead of time 
              for pickup at our Bloomington location.
            </p>
          </div>

          {/* Order Information */}
          <div className="mx-auto max-w-2xl mt-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Orders are typically ready in 10-15 minutes during regular hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Pick up at our Downtown Bloomington or Prospect Road locations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  <span>Secure payment through Square</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-black mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>You'll receive an email confirmation with your order details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Square Online Ordering Embed - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-[1600px] mx-auto">
          {/* Frame Header - indicates embedded ordering system */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-t-xl px-6 py-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <span className="text-white text-sm font-semibold">Square Online Ordering</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="text-xs hidden sm:inline">Secure Checkout</span>
              </div>
              {/* Fullscreen Toggle Button - Only show if supported */}
              {isFullscreenSupported && (
                <button
                  onClick={toggleFullScreen}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white text-xs font-medium"
                  title={isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullScreen ? (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                      </svg>
                      <span className="hidden sm:inline">Exit Fullscreen</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                      <span className="hidden sm:inline">Fullscreen</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
          
          {/* Iframe Container with border */}
          <div 
            ref={iframeContainerRef}
            className="relative w-full bg-white rounded-b-xl shadow-2xl border-4 border-gray-900 border-t-0" 
            style={{ paddingBottom: '100%', minHeight: '800px' }}
            onFullscreenChange={handleFullScreenChange}
            onWebkitFullscreenChange={handleFullScreenChange}
          >
            <iframe
              src="https://labcoffeebn.square.site"
              className="absolute top-0 left-0 w-full h-full rounded-b-xl"
              title="Lab Coffee Online Ordering"
              style={{ minHeight: '800px' }}
              allowFullScreen
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
