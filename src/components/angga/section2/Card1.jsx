// import React, { useEffect, useState, useRef } from 'react';
// import { product1, product2, product3, product4 } from '../../../importGambar';

// const Card1 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollContainerRef = useRef(null);
  
//   const data = [
//     {
//       title: 'cloud VPS',
//       desc: 'deploy & scale cloud dengan mudah',
//       price: "50.000",
//       img: product1
//     },
//     {
//       title: 'managed VPS',
//       desc: 'VPS dengan optimasi WHM dan cPanel',
//       price: "480.000",
//       img: product2
//     },
//     {
//       title: 'bare metal server',
//       desc: 'kontrol dan sesuaikan kebutuhan dengan dedicated resources',
//       price: "2.500.000",
//       img: product3
//     },
//     {
//       title: 'cloud hosting',
//       desc: 'web hosting dengan optimized SSD',
//       price: "15.000",
//       img: product4
//     },
//     {
//       title: 'cloud VPS',
//       desc: 'deploy & scale cloud dengan mudah',
//       price: "50.000",
//       img: product1
//     },
//     {
//       title: 'managed VPS',
//       desc: 'VPS dengan optimasi WHM dan cPanel',
//       price: "480.000",
//       img: product2
//     },
//     {
//       title: 'bare metal server',
//       desc: 'kontrol dan sesuaikan kebutuhan dengan dedicated resources',
//       price: "2.500.000",
//       img: product3
//     },
//     {
//       title: 'cloud hosting',
//       desc: 'web hosting dengan optimized SSD',
//       price: "15.000",
//       img: product4
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [data.length]);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.scrollTo({
//         left: currentIndex * (313 + 12), // card width + gap
//         behavior: 'smooth'
//       });
//     }
//   }, [currentIndex]);

//   return (
//     <div className='w-full mx-auto'>
//       <div className="max-w-[1305px] mx-auto">
//         <div 
//           ref={scrollContainerRef}
//           className="h-[442px] overflow-x-auto overflow-y-hidden no-scrollbar mt-12 py-16 px-4 bg-transparent rounded-3xl border border-slate-200 flex justify-start gap-3 relative select-none"
//         >
//           {data.map((item, index) => (
//             <div 
//               key={index} 
//               className="min-w-[313px] h-[334px] flex flex-col justify-center items-center gap-4 rounded-lg bg-white/10 shadow-edit mt-5"
//             >
//               <img src={item.img} alt="product" className='absolute top-6 w-28 h-28'/>
//               <h1 className='text-black font-bold text-xl capitalize'>{item.title}</h1>
//               <h3 className='text-zinc-400 font-normal mb-6 text-base text-center w-[265px] capitalize text-wrap'>
//                 {item.desc}
//               </h3>
//               <div className="flex flex-col justify-center items-center gap-1">
//                 <h1 className='text-black font-semibold text-lg'>Mulai dari</h1>
//                 <p className='text-[#3399ff]'>Rp{item.price} / Bln</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Added navigation dots */}
//         {/* <div className="flex justify-center gap-2 mt-4">
//           {data.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 rounded-full transition-colors ${
//                 currentIndex === index ? 'bg-[#3399ff]' : 'bg-gray-300'
//               }`}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Card1;


// responsive version 
import React, { useEffect, useState, useRef } from 'react';
import { product1, product2, product3, product4 } from '../../../importGambar';

const Card1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  
  const data = [
    {
      title: 'cloud VPS',
      desc: 'deploy & scale cloud dengan mudah',
      price: "50.000",
      img: product1
    },
    {
      title: 'managed VPS',
      desc: 'VPS dengan optimasi WHM dan cPanel',
      price: "480.000",
      img: product2
    },
    {
      title: 'bare metal server',
      desc: 'kontrol dan sesuaikan kebutuhan dengan dedicated resources',
      price: "2.500.000",
      img: product3
    },
    {
      title: 'cloud hosting',
      desc: 'web hosting dengan optimized SSD',
      price: "15.000",
      img: product4
    },
    {
      title: 'cloud VPS',
      desc: 'deploy & scale cloud dengan mudah',
      price: "50.000",
      img: product1
    },
    {
      title: 'managed VPS',
      desc: 'VPS dengan optimasi WHM dan cPanel',
      price: "480.000",
      img: product2
    },
    {
      title: 'bare metal server',
      desc: 'kontrol dan sesuaikan kebutuhan dengan dedicated resources',
      price: "2.500.000",
      img: product3
    },
    {
      title: 'cloud hosting',
      desc: 'web hosting dengan optimized SSD',
      price: "15.000",
      img: product4
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        left: currentIndex * (313 + 12), // card width + gap
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className='w-full'>
      <div className="max-w-[1305px] mx-auto">
        <div 
          ref={scrollContainerRef}
          className="h-auto max-sm:w-full sm:h-[400px] md:h-[442px] overflow-x-auto overflow-y-hidden no-scrollbar mt-6 sm:mt-8 lg:mt-12 py-6 sm:py-12 max-sm:py-10 lg:py-16 px-4 rounded-xl sm:rounded-3xl border border-slate-200 flex flex-nowrap gap-3"
        >
          {data.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[313px] h-[280px] sm:h-[300px] md:h-[334px] flex flex-col justify-center items-center gap-4 rounded-lg bg-white/10 shadow-edit mt-5 relative"
            >
              <img src={item.img} alt="product" className='absolute -top-12 w-28 h-28 max-sm:w-20 max-sm:h-20 max-sm:-top-9'/>
              <h1 className='text-black font-bold text-xl capitalize'>{item.title}</h1>
              <h3 className='text-zinc-400 font-normal mb-6 text-base text-center w-[265px] capitalize text-wrap'>
                {item.desc}
              </h3>
              <div className="flex flex-col justify-center items-center gap-1">
                <h1 className='text-black font-semibold text-lg'>Mulai dari</h1>
                <p className='text-[#3399ff]'>Rp{item.price} / Bln</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card1;