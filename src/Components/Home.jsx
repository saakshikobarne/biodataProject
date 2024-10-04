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
