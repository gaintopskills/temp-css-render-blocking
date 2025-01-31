import React, { useState, useEffect } from "react";

export const StitchingAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay to ensure smooth fade-in

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className="image-container">
      <img
        src="/e-and-r-unlimited-custom-wholesale-embroidery-services.webp" // Assuming the image is placed in the "public" folder
        alt="Fading Image"
        className={`fade-in-image ${isVisible ? "visible" : ""}`}
        style={{
          width: "90vw", // Full width of the viewport
          height: "90vh", // Full height of the viewport
        
        }}
      />
  {/* Scroll Down Indicator (Appears After Image Loads) */}
  <div
        className={`absolute bottom-10 flex justify-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white opacity-40 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StitchingAnimation;
