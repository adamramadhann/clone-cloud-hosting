// import React from 'react';
// import { logoIdCloud } from '../../importGambar';
// import { IoChevronDown } from 'react-icons/io5';
// import ProductCard from './product/ProductCard';
// import NavbarCard from './card navbar/NavbarCard';
// import LayoutScreen from '../LayoutScreen';

// const Navbar = ({ styling }) => {
//   return (
//     <LayoutScreen>
//         <nav className={`w-full h-20 text-white flex justify-center fixed ${styling}`}>
//             <div className="max-w-screen-2xl h-full flex items-center justify-between gap-60">
//             <div className="flex items-center">
//                 <img src={logoIdCloud} alt="logo" className='w-44' />
//             </div>
            
//             <div className="flex space-x-10 font-medium text-base">
//                 <div className="group relative">
//                     <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
//                         Produk
//                     </button>
//                     <ProductCard />
//                 </div>
//                 <div className="group relative">
//                     <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
//                         Harga
//                     </button>
//                 </div>
//                 <div className="group relative">
//                     <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
//                         Solusi 
//                     </button>
//                     <NavbarCard styling={'-left-[560px]'} titleCard='edukasi' descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' titlePromo='cutomer' descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'/>
//                 </div>
//                 <div className="group relative">
//                     <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
//                         Program
//                     </button>
//                     <NavbarCard styling={'-left-[640px]'} titleCard='affiliate' descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' titlePromo='partnership and sponsorship' descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'/>
//                 </div>
//                 <div className="group relative">
//                     <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
//                         Bantuan
//                     </button>
//                     <NavbarCard styling={'-left-[740px]'} titleCard='panduan / tutorial' descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' titlePromo='bantuan cs 24/7' descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'/>
//                 </div>
//                 <div className="group relative">
//                     <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
//                         Promo
//                     </button>
//                 </div>
//             </div>

//             <div className='group relative'>
//                 <button className="bg-white/20 w-28 px-4 py-2 rounded-lg font-bold border border-white/60 flex justify-center items-center gap-2">
//                     LOGIN
//                     <IoChevronDown />
//                 </button>

//                 <div className="w-44 h-52 hidden group-hover:block bg-white absolute top-[50px] -right-[15px] z-50 shadow-lg text-zinc-500 text-base ">
//                     <div className="w-full h-full flex flex-col items-start justify-evenly py-2 px-6 gap-5">
//                         <a href="#" className='hover:underline underline-offset-4 decoration-[#3093FB] decoration-2'>
//                             Client Area
//                         </a>
//                         <a href="#" className='w-6 text-wrap hover:underline underline-offset-4 decoration-[#3093FB] decoration-2'>
//                             Console Platform
//                         </a>
//                         <a href="#" className='w-6 text-wrap hover:underline underline-offset-4 decoration-[#3093FB] decoration-2'>
//                             Awan Platform
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </nav>
//     </LayoutScreen>
//   );
// };

// export default Navbar;

// responsive version
import React, { useState } from 'react';
import { IoChevronDown, IoMenu, IoClose } from 'react-icons/io5';
import { logoIdCloud } from '../../importGambar';
import ProductCard from './product/ProductCard';
import NavbarCard from './card navbar/NavbarCard';
import LayoutScreen from '../LayoutScreen';

const Navbar = ({ styling }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MenuItems = [
    { 
      label: 'Produk', 
      card: <ProductCard />,
      styling: '' 
    },
    { 
      label: 'Harga', 
      card: null,
      styling: '' 
    },
    { 
      label: 'Solusi', 
      card: <NavbarCard 
        styling={'-left-[560px]'} 
        titleCard='edukasi' 
        descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' 
        titlePromo='cutomer' 
        descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'
      />,
      styling: '' 
    },
    { 
      label: 'Program', 
      card: <NavbarCard 
        styling={'-left-[640px]'} 
        titleCard='affiliate' 
        descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' 
        titlePromo='partnership and sponsorship' 
        descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'
      />,
      styling: '' 
    },
    { 
      label: 'Bantuan', 
      card: <NavbarCard 
        styling={'-left-[740px]'} 
        titleCard='panduan / tutorial' 
        descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' 
        titlePromo='bantuan cs 24/7' 
        descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'
      />,
      styling: '' 
    },
    { 
      label: 'Promo', 
      card: null,
      styling: '' 
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <LayoutScreen>
      <nav className={`w-full h-16 sm:h-18 md:h-20 text-white flex justify-center fixed ${styling}`}>
        <div className="w-full max-w-screen-2xl h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoIdCloud} alt="logo" className='w-32 sm:w-36 md:w-44' />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-10 font-medium text-sm xl:text-base">
            {MenuItems.map((item, index) => (
              <div key={index} className="group relative">
                <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
                  {item.label}
                </button>
                {item.card}
              </div>
            ))}
          </div>

          {/* Desktop and Mobile Login Wrapper */}
          <div className='group relative'>
            {/* Desktop Login Button */}
            <button className="hidden lg:flex bg-white/20 w-28 px-4 py-2 rounded-lg font-bold border border-white/60 items-center gap-2">
              LOGIN
              <IoChevronDown />
            </button>

            {/* Login Dropdown for Desktop */}
            <div className="w-44 h-52 hidden group-hover:block bg-white absolute top-[50px] -right-[15px] z-50 shadow-lg text-zinc-500 text-base min-lg:block">
              <div className="w-full h-full flex flex-col items-start justify-evenly py-2 px-6 gap-5">
                <a href="#" className='hover:underline underline-offset-4 decoration-[#3093FB] decoration-2'>
                  Client Area
                </a>
                <a href="#" className='w-6 text-wrap hover:underline underline-offset-4 decoration-[#3093FB] decoration-2'>
                  Console Platform
                </a>
                <a href="#" className='w-6 text-wrap hover:underline underline-offset-4 decoration-[#3093FB] decoration-2'>
                  Awan Platform
                </a>
              </div>
            </div>
          </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
            <button 
            onClick={toggleMobileMenu} 
            className="text-white text-2xl focus:outline-none flex items-center"
            >
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
        </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed bg-transparent z-40 lg:hidden">
              <div className="fixed top-12 right-8 w-48 h-52 overflow-y-auto rounded-md     bg-white text-zinc-500 p-6 no-scrollbar" >
                {/* <div className="flex justify-end items-center mb-8">
                  <button 
                    onClick={toggleMobileMenu} 
                    className="text-zinc-500 text-2xl focus:outline-none"
                  >
                    <IoClose />
                  </button>
                </div> */}

                <div className="flex flex-col space-y-4">
                  {MenuItems.map((item, index) => (
                    <div key={index} className="border-b border-white/6 0 pb-4">
                      <button className="w-full text-left text-zinc-500 text-lg font-medium">
                        {item.label}
                      </button>
                    </div>
                  ))}

                  {/* Mobile Login Section */}
                  <div className="mt-6 w-full">
                    <div className="w-full bg-black rounded-lg p-4">
                      <div className="flex flex-col space-y-4">
                        <button className="w-full bg-white/20 px-4 py-2 rounded-lg font-bold border border-white/60 flex justify-center items-center gap-2 text-white">
                          LOGIN
                          <IoChevronDown />
                        </button>
                        <a href="#" className='text-white text-lg'>Client Area</a>
                        <a href="#" className='text-white text-lg'>Console Platform</a>
                        <a href="#" className='text-white text-lg'>Awan Platform</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </LayoutScreen>
  );
};

export default Navbar;