import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Section from './Section';
import Buttons from './Buttons';

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#FBF6D5] md:pb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg-image.webp"
          alt="background"
          className="w-full h-full object-cover opacity-40 blur-sm"
        />
      </div>

      {/* Floating Circular Image */}
      <div className="absolute right-4 top-14 z-20 lg:right-96 lg:top-24">
        <img
          src="/assets/navratrioff.png"
          alt="floating circular"
          className="w-24 h-24 lg:w-36 lg:h-36 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Main />
        <Section />
        <Buttons />
      </div>
    </div>
  );
}

export default Home;
