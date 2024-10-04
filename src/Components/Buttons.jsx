import React from 'react';
import { useNavigate } from 'react-router-dom';

function Buttons() {
  const navigate = useNavigate(); // Hook for navigating programmatically

  const handleClick = () => {
    navigate('/reviews'); // Navigate to the reviews page on click
  };

  return (
    <div className="flex items-center mt-6 justify-center">
      <button 
        className="relative w-auto bg-red-700 rounded-3xl p-4 text-white overflow-hidden shine-effect"
        onClick={handleClick}
      >
        <b className="relative z-10">
          आता <s>₹399</s> फक्त ₹199! <br />
          बायो डेटा बनवण्यासाठी क्लिक करा
        </b>
        {/* Shine effect */}
        <div className="absolute inset-0 bg-white opacity-20 transform skew-x-12 shine"></div>
      </button>
    </div>
  );
}

export default Buttons;
