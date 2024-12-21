import React, { useState } from 'react';
import { footerBsi1, footerId, footerKominfo } from '../importGambar';
import { FaFacebook, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import AccordionsFooter from '../component/AccordionsFooter';
import LayoutScreen from '../component/LayoutScreen';

const Footer = () => {
  const imageCopyRigth = [
    { urlImage: footerBsi1 },
    { urlImage: footerBsi1 },
    { urlImage: footerKominfo },
    { urlImage: footerId },
  ];


  const icon = [
    {
      icon : <FaFacebook size={15} />
    },
    {
      icon : <RiInstagramFill size={15} />
    },
    {
      icon : <FaLinkedinIn size={15} />
    },
    {
      icon : <FaYoutube size={15} />
    },
    {
      icon : <FaPinterestP size={15} />
    },
  ]



  return (
    <LayoutScreen>

    <footer className="w-full h-full ">
      <AccordionsFooter/>
      <section className='flex w-full' >
          <section className=' mr-20 ' >
              <h1 className='text-xl font-semibold' >About IDCloudHost</h1>
              <p className='text-justify mt-3  text-gray-400 text-lg leading-8 w-[700px] ' >IDCloudHost (PT Cloud Hosting Indonesia) adalah penyedia layanan Web Hosting Provider berbasis SSD Cloud Hosting yang mempunyai tujuan untuk selalu menjaga website tetap hidup dan cepat di akses dari berbagai negara. Saat ini tersedia Beberapa Data Center Utama yang dapat Anda gunakan dengan berlangganan menggunakan layanan Kami. </p>
              <h1 className='text-lg mt-10 font-semibold' >IDCloudHost is also Available in Singapore</h1>
              <section className='flex gap-4' >
                  {
                    icon.map((val) => (
                      <span  key={val.icon} className='w-8 h-8 mt-3 rounded-full flex items-center justify-center bg-gray-400 text-white' >
                        <a href="#">{val.icon}</a>
                      </span>
                    ))
                  }
              </section>
              <p className='text-gray-400 mt-3 ' >Tim Support Kami siap membantu anda selama 24 jam. Hubungi <a className='text-blue-500' >Tim Support</a></p>
          </section>
         <section className='flex w-full text-xl text-gray-400 gap-20' > 
         <ul className='flex-1 flex flex-col gap-3 text-lg' >
            <li className='text-black' >servive</li>
            <li>Cloud VPS</li>
            <li>Server VPS</li>
            <li>Cloud Hosting</li>
            <li>Dedicated Server</li>
            <li>Layanan Lainnya</li>
          </ul>
         <ul className='flex-1 flex flex-col gap-3 text-lg' >
            <li>servive</li>
            <li>Cloud VPS</li>
            <li>Server VPS</li>
            <li>Cloud Hosting</li>
            <li>Dedicated Server</li>
            <li>Layanan Lainnya</li>
          </ul>
         <ul className='flex-1 flex flex-col gap-3 text-lg' >
            <li className='' >servive</li>
            <li>Cloud VPS</li>
            <li>Server VPS</li>
            <li>Cloud Hosting</li>
            <li>Dedicated Server</li>
            <li>Layanan Lainnya</li>
          </ul>
         </section>
      </section>

      <h1 className='text-lg font-bold mt-5 mb-2 ' >Accepted Payment Method</h1>
      <img src="src/assets/Screenshot 2024-12-21 at 16.27.30.png" className='w-[1000px]' alt="" />

      <section className=" mx-auto flex mt-3 items-center justify-between">
        <p className="text-gray-600 text-lg text-center ">
          2015 - 2024 © PT Cloud Hosting Indonesia
        </p>
        <section className="flex items-center mt-4 gap-4">
          <h2 className="text-gray-800 text-lg font-semibold">
            AKREDITASI & PARTNER
          </h2>
          <div className="flex items-center gap-4">
            {imageCopyRigth.map((val, index) => (
              <img
                key={index}
                src={val.urlImage}
                alt="Footer Accreditation or Partner Logo"
                className="w-28 h-12 object-contain"
              />
            ))}
          </div>
        </section>
      </section>
    </footer>
    </LayoutScreen>
  );
};

export default Footer;
