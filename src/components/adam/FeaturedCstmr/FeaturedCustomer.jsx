import React, { useState, useEffect } from 'react';
import LayoutScreen from '../../LayoutScreen';
import { costumers1, costumers2, costumers3 } from '../../../importGambar';

const FeaturedCustomer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Array of images
  const imageSlate = [
    { img: costumers1 },
    { img: costumers2 },
    { img: costumers3 },
  ];

  // Function to change the image
  const changeImage = () => {
    setIsSliding(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSlate.length);
  };

  // Start the image change interval when the mouse enters
  useEffect(() => {
    if (!isSliding) {
      const id = setInterval(() => {
        changeImage();
      }, 3000);
      setIntervalId(id); // Store the interval ID so it can be cleared later

      // Clear interval on component unmount or when sliding
      return () => clearInterval(id);
    }
  }, [isSliding]); // Re-run the effect when `isSliding` changes

  // Reset sliding animation after the image changes
  useEffect(() => {
    if (isSliding) {
      const timeout = setTimeout(() => {
        setIsSliding(false); // Reset the sliding effect after animation completes
      }, 10); // Match the duration of the slide

      return () => clearTimeout(timeout);
    }
  }, [currentImageIndex, isSliding]);

  return (
    <LayoutScreen>
      <section className='mx-10' >
      <div
        className="flex w-full  relative h-[500px] flex-col items-center justify-center"
      >
        <h1 className="text-5xl font-bold text-cente pb-20" 
        onMouseEnter={() => setIsSliding(true)} 
        onMouseLeave={() => {
          setIsSliding(false); 
          if (intervalId) {
            clearInterval(intervalId); 
          }
        }} >
          Featured Customer
        </h1>
        <div className="mb-10 overflow-hidden relative">
          <div
            className={`transition-transform  ease-out ${
              isSliding ? 'transform translate-x-[100%] duration-5000 opacity-0' : 'transform duration-50 opacity-100'
            }`}
          >
            <img
              src={imageSlate[currentImageIndex].img}
              alt={`Customer ${currentImageIndex + 1}`}
              className="w-full object-cover"
            />
          </div>
        </div>
        <button className="text-blue-500 hover:text-white hover:bg-blue-500 rounded-md absolute bottom-0 left-1/2 translate-x-[-50%] w-[200px] mx-auto py-4 text-sm border">
          Customer Story
        </button>
      </div>
      </section>
    </LayoutScreen>
  );
};

export default FeaturedCustomer;
