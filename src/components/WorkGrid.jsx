import { useState, useRef } from 'react';
import { videoData } from '../data/videoData';
import VideoModal from './VideoModal';

export default function WorkGrid({ showHeader = false, title = "Selected Work" }) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const openVideo = (index) => {
    setSelectedVideoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevVideo = () => {
    setSelectedVideoIndex((prev) => (prev > 0 ? prev - 1 : videoData.length - 1));
  };

  const handleNextVideo = () => {
    setSelectedVideoIndex((prev) => (prev < videoData.length - 1 ? prev + 1 : 0));
  };

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      aria-label="Video showcase"
      className="w-full px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto py-12 md:py-16"
    >
      {showHeader && (
        <div className="mb-8 md:mb-12">
          <h2 className="text-[#064E3B] text-4xl md:text-6xl font-extrabold tracking-tight">
            {title}.
          </h2>
        </div>
      )}

      {/* Clean Carousel Container matching reference image */}
      <div className="relative group/carousel">
        {/* Left Scroll Chevron Arrow */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#064E3B] shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 border border-black/5 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Scroll Chevron Arrow */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#064E3B] shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 border border-black/5 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* 4 Clean Portrait Cards Row */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videoData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openVideo(index)}
              className="group relative flex-none w-[78vw] sm:w-[45vw] md:w-[calc(25%-18px)] snap-center cursor-pointer select-none"
            >
              {/* Card Body: Clean portrait rectangle with subtle shadow and border */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 shadow-md transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-1.5 border border-black/5 ring-1 ring-black/[0.04]">
                
                {/* Background Image Thumbnail provided in the section */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark vignette on bottom for depth & clean contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />

                {/* Minimal Centered Play Button (reveals / scales on hover) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-[#064E3B] backdrop-blur-md shadow-xl flex items-center justify-center transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-white">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Clean Bottom Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end text-white pointer-events-none">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A7F3D0] drop-shadow-sm">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug mt-0.5 drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        video={selectedVideoIndex !== null ? videoData[selectedVideoIndex] : null}
        currentIndex={selectedVideoIndex ?? 0}
        totalVideos={videoData.length}
        onClose={closeModal}
        onPrev={handlePrevVideo}
        onNext={handleNextVideo}
      />
    </section>
  );
}
