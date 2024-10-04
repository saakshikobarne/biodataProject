import React from 'react';

function BuyButton() {
  const handleClick = () => {
    window.location.href = 'http://wa.me/918788020483';
  };

  return (
    <div className="flex items-center mt-6 justify-center">
      <button 
        className="relative w-auto bg-red-700 rounded-3xl p-4 text-white overflow-hidden shine-effect"
        onClick={handleClick}
      >
        <b className="relative z-10">
          फक्त ₹199! मध्ये<br />
          बायोडेटा बनवण्यासाठी क्लिक करा
        </b>
        {/* Shine effect */}
        <div className="absolute inset-0 bg-white opacity-20 transform skew-x-12 shine"></div>
      </button>
    </div>
  );
}

export default BuyButton;
