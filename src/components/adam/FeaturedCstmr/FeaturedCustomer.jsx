import React, { useState, useEffect } from 'react';
import LayoutScreen from '../../LayoutScreen';
import { 
  dhm, kimiaFarma, logoBukalapak, logoIndmaret, madrasah, 
  msFlow, peruri, ot, ppj, telkom, sugoIndo, techno, viva, wide 
} from '../../../importGambar';

const FeaturedCustomer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const imageSlate = [
    { img: logoIndmaret },
    { img: logoBukalapak },
    { img: dhm },
    { img: kimiaFarma },
    { img: madrasah },
    { img: msFlow },
    { img: peruri },
    { img: ot },
    { img: sugoIndo },
    { img: ppj },
    { img: telkom },
    { img: techno },
    { img: viva },
    { img: wide },
    { img: peruri },
    { img: ot },
    { img: sugoIndo },
    { img: ppj },
  ]

  const visibleImagesCount = 18; 

  
  const visibleImages = [
    ...imageSlate.slice(currentImageIndex, currentImageIndex + visibleImagesCount),
    ...imageSlate.slice(0, Math.max(0, (currentImageIndex + visibleImagesCount) - imageSlate.length)),
  ].slice(0, visibleImagesCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 9) % imageSlate.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageSlate.length]);

  return (
    <LayoutScreen>
      <section className="flex w-full items-center -mt-20 justify-center">
        <div className="flex rounded-lg relative h-[663px] flex-col items-center justify-center">
          <h1 className="sm:text-6xl text-5xl w-[300px] sm:w-full font-bold pb-20 text-center ">Featured Customer</h1>
          <div 
            style={{ boxShadow: '6px 40px 45px rgba(0, 0, 0, 0.027)' }} 
            className="w-[1165px] rounded-lg sm:bg-white overflow-hidden p-5 max-h-[400px] flex flex-col justify-center items-center"
          >
            <div className='w-full overflow-hidden h-[300px] px-10 flex items-center justify-center flex-col bg-slate-100/10' >
              
            <div className="grid sm:grid-cols-9 grid-cols-2 p-5 mr-5 gap-20 overflow-hidden ">
              {visibleImages.slice(0, 9).map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="bg-white w-24 h-24 px-4 py-2 shadow-[0_0_15px_rgba(0,0,0,0.2)] sm:shadow-lg rounded-lg transform -translate-y-2"
                >
                  <img
                    src={image.img}
                    alt={`customer-logo-${index}`}
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-9  grid-cols-2 mr-5 p-5 gap-20 overflow-hidden ">
              {visibleImages.slice(9, 18).map((image, index) => (
                <div
                  key={`row2-${index}`}
                  className="bg-white w-24 h-24 px-4 py-2 shadow-[0_0_15px_rgba(0,0,0,0.2)]  sm:shadow-lg rounded-lg transform translate-y-2"
                >
                  <img
                    src={image.img}
                    alt={`customer-logo-${index + 9}`}
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}
            </div>
            </div>
            <button className="text-blue-500 hover:text-white hover:bg-blue-500 rounded-md w-[200px] mx-auto py-4 text-sm border mt-8">
              Customer Story
            </button>
          </div>
        </div>
      </section>
    </LayoutScreen>
  );
};

export default FeaturedCustomer;