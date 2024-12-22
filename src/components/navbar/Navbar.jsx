import React from 'react';
import { logoIdCloud } from '../../importGambar';
import { IoChevronDown } from 'react-icons/io5';
import ProductCard from './product/ProductCard';
import NavbarCard from './card navbar/NavbarCard';
import LayoutScreen from '../LayoutScreen';

const Navbar = ({ styling }) => {
  return (
    <LayoutScreen>
        <nav className={`w-full h-20 text-white flex justify-center ${styling}`}>
            <div className="max-w-screen-2xl h-full flex items-center justify-between gap-60">
            <div className="flex items-center">
                <img src={logoIdCloud} alt="logo" className='w-44' />
            </div>
            
            <div className="flex space-x-10 font-medium text-base">
                <div className="group relative">
                    <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
                        Produk
                    </button>
                    <ProductCard />
                </div>
                <div className="group relative">
                    <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
                        Harga
                    </button>
                </div>
                <div className="group relative">
                    <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
                        Solusi 
                    </button>
                    <NavbarCard titleCard='edukasi' descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' titlePromo='cutomer' descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'/>
                </div>
                <div className="group relative">
                    <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
                        Program
                    </button>
                    <NavbarCard titleCard='affiliate' descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' titlePromo='partnership and sponsorship' descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'/>
                </div>
                <div className="group relative">
                    <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
                        Bantuan
                    </button>
                    <NavbarCard titleCard='panduan / tutorial' descCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae.' titlePromo='bantuan cs 24/7' descPromo='Solusi layanan terbaik untuk Anda! Bersama IDCloudHost, Temukan solusi yang tepat untuk mengembangkan bisnis Anda dalam berbagai bidang yang berbeda. Mari simak testimoni dari para pelanggan unggulan untuk layanan IDCloudHost!'/>
                </div>
                <div className="group relative">
                    <button className="flex items-center group-hover:text-blue-200 group-hover:underline group-focus:underline underline-offset-[16px] decoration-2">
                        Promo
                    </button>
                </div>
            </div>

            <div className='group relative'>
                <button className="bg-white/20 w-28 px-4 py-2 rounded-lg font-bold border border-white/60 flex justify-center items-center gap-2">
                    LOGIN
                    <IoChevronDown />
                </button>

                <div className="w-44 h-52 hidden group-hover:block bg-white fixed top-[68px] right-[280px] z-50 shadow-md text-zinc-500 text-base ">
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
            </div>
        </nav>
    </LayoutScreen>
  );
};

export default Navbar;