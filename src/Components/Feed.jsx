import React, { useState } from 'react';

function Feed() {
    const images = [
        '/assets/rev1.png',
        '/assets/rev2.png',
        '/assets/rev3.png',
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden mt-8">
      {/* Container to limit the size of the images */}
      <div className="flex items-center justify-center max-h-80 h-auto max-w-full">
        <img 
          src={images[currentIndex]} 
          alt="carousel" 
          className="w-auto h-full max-h-80 object-contain" // Set max height and contain
        />
      </div>
      
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-4 -translate-y-1/2 text-red-950 p-2 rounded-full cursor-pointer">
        <img src='./assets/left.svg' width={'40px'}/>
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-4 -translate-y-1/2 text-red-950 p-2 rounded-full cursor-pointer">
        <img src='./assets/right.svg' width={'40px'}/>
      </button>
    </div>
  );
}

export default Feed;
