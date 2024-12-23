import React, { useState, useEffect } from 'react';
import LayoutScreen from '../../LayoutScreen';
import { 
  dhm, kimiaFarma, logoBukalapak, logoIndmaret, madrasah, 
  msFlow, peruri, ot, ppj, telkom, sugoIndo, techno, viva, wide 
} from '../../../importGambar';

const FeaturedCustomer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const imageSlate = [
    { img: logoIndmaret },
    { img: logoBukalapak },
    { img: dhm },
    { img: kimiaFarma },
    { img: madrasah },
    { img: msFlow },
    { img: peruri },
    { img: ot },
    { img: ppj },
    { img: madrasah },  
    { img: ppj },
    { img: telkom },
    { img: sugoIndo },
    { img: techno },
    { img: viva },
    { img: wide },
  ];

  // Change image function
  const changeImage = () => {
    setIsSliding(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSlate.length);
  };

  // Handle interval start and stop
  const startSliding = () => {
    const id = setInterval(changeImage, 3000);
    setIntervalId(id);
  };

  const stopSliding = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    if (isSliding) {
      const timeout = setTimeout(() => setIsSliding(false), 500); // Transition duration
      return () => clearTimeout(timeout);
    }
  }, [isSliding]);

  return (
    <LayoutScreen>
      <section className="flex w-full items-center justify-center">
        <div className="flex rounded-lg relative h-[663px] flex-col items-center justify-center">
          <h1
            className="text-5xl font-bold pb-32 text-center"
            onMouseEnter={() => {
              setIsSliding(false);
              startSliding(); // Start animation when mouse enters
            }}
            onMouseLeave={() => {
              stopSliding(); // Stop animation when mouse leaves
            }}
          >
            Featured Customer
          </h1>
          <div className="w-[1165px] bg-white p-5 max-h-[400px] flex flex-col justify-center items-center">
            <div className="w-full relative">
              <div
                className={`transition-transform w-full py-3  ease-out ${
                  isSliding
                    ? 'transform translate-x-[100%] duration-500 opacity-0'
                    : 'transform  duration-500 opacity-100'
                }`}
              >
                <div className="grid grid-cols-8 max-h-[300px] w-full gap-5">
                  {imageSlate.map((image, index) => (
                    <span
                      key={index}
                      className="bg-white w-24 h-24 px-4 py-2 shadow-lg rounded-lg"
                    >
                      <img
                        src={image.img}
                        alt="customer-logo"
                        className="object-contain w-20 h-20"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="text-blue-500 hover:text-white hover:bg-blue-500 rounded-md w-[200px] mx-auto py-4 text-sm border">
              Customer Story
            </button>
          </div>
        </div>
      </section>
    </LayoutScreen>
  );
};

export default FeaturedCustomer;
