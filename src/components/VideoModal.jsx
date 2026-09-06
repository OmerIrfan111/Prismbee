import { useState, useEffect, useRef } from 'react';

export default function VideoModal({ video, isOpen, onClose, onPrev, onNext, currentIndex, totalVideos }) {
  const videoRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Sync zoom state whenever active video changes
  useEffect(() => {
    if (video) {
      setIsZoomed(Boolean(video.isZoomed));
    }
  }, [video]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key.toLowerCase() === 'z') setIsZoomed((prev) => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, onNext, onPrev]);

  // Restart and play video whenever active video changes
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted without user interaction
      });
    }
  }, [video, isOpen]);

  if (!isOpen || !video) return null;

  const currentZoomClass = video.zoomScaleClass || 'scale-[1.08] md:scale-[1.14]';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar: Title, Count, Zoom Toggle & Close Button */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#10B981]/20 text-[#A7F3D0] border border-[#10B981]/30">
            {video.category || '3D Motion'}
          </span>
          <span className="text-white/60 text-xs sm:text-sm font-medium tracking-wide">
            {String(currentIndex + 1).padStart(2, '0')} / {String(totalVideos).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Toggle button */}
          <button
            onClick={() => setIsZoomed((prev) => !prev)}
            aria-label={isZoomed ? "Reset zoom" : "Zoom video slightly"}
            title={isZoomed ? "Zoom: Active (Click to reset)" : "Zoom: Fit (Click to zoom)"}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 backdrop-blur-md border cursor-pointer flex items-center gap-1.5 shadow-lg ${
              isZoomed
                ? 'bg-[#10B981] text-white border-[#10B981]'
                : 'bg-white/10 hover:bg-white/20 text-white/90 border-white/15'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              {isZoomed ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9L4 4m0 0l5 0m-5 0l0 5m11-5l5 5m0-5l-5 0m5 0l0 5M9 15l-5 5m0 0l5 0m-5 0l0-5m11 5l5-5m0 5l-5 0m5 0l0-5" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              )}
            </svg>
            <span>{isZoomed ? 'Zoomed' : 'Zoom'}</span>
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/10 cursor-pointer shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Prev Button (Left) */}
      {totalVideos > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev?.();
          }}
          aria-label="Previous video"
          className="absolute left-2 sm:left-6 md:left-10 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/10 cursor-pointer shadow-xl group"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Video Content Container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center max-h-[88vh]">
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center max-h-[76vh]">
          <video
            ref={videoRef}
            src={video.src}
            controls
            autoPlay
            playsInline
            className={`w-full max-h-[76vh] bg-black transition-transform duration-300 ${
              isZoomed ? `${currentZoomClass} object-cover origin-center` : 'object-contain'
            }`}
          />
        </div>

        {/* Video Info Footer */}
        <div className="w-full mt-3 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-2 text-white">
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">{video.title}</h3>
            {video.description && (
              <p className="text-white/70 text-xs sm:text-sm mt-0.5 max-w-xl">{video.description}</p>
            )}
          </div>
          <div className="text-xs text-white/50 hidden sm:block">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/90 font-mono text-[11px]">ESC</kbd> to close &bull; Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/90 font-mono text-[11px]">&larr;</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/90 font-mono text-[11px]">&rarr;</kbd> to navigate
          </div>
        </div>
      </div>

      {/* Next Button (Right) */}
      {totalVideos > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
          aria-label="Next video"
          className="absolute right-2 sm:right-6 md:right-10 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/10 cursor-pointer shadow-xl group"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
