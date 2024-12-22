import React, { useState } from 'react';
import { footerBsi1, footerBsi2, footerId, footerKominfo, payment } from '../importGambar';
import { FaFacebook, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import LayoutScreen from '../components/LayoutScreen';
import AccordionsFooter from '../components/adam/AccordionsFooter';

const Footer = () => {
  const imageCopyRigth = [
    {   urlImage: footerBsi1 },
    {   urlImage: footerBsi2 },
    {   urlImage: footerKominfo },
    {   urlImage: footerId },
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
      icon : <FaTwitter size={15} />
    },
    {
      icon : <FaPinterestP size={15} />
    },
  ]

  const dataMenuFooter = [
    {
      judul: 'Service',
      menus: ['Cloud VPS', 'Server VPS', 'Cloud Hosting', 'Dedicated Server', 'Layanan Lainnya'],
    },
    {
      judul: 'Company',
      menus: ['Tentang Perusahaan', 'Afiliasi', 'Tanya Jawab', 'Ketentuan Layanan', 'Request Penawaran'],
    },
    {
      judul: 'Links',
      menus: ['Pembayaran', 'Status Server', 'Promo', 'Panduan', 'Blog'],
    },
  ]

  console.log(imageCopyRigth)



  return (
    <LayoutScreen>
    <footer className="w-full mb-10 h-full ">
      <AccordionsFooter/>
      <section className='flex w-full' >
          <section className=' mr-20 ' >
              <h1 className='text-xl font-semibold mt-5 ' >About IDCloudHost</h1>
              <p className='text-justify mt-3  text-gray-400 text-sm leading-8 w-[600px] ' >IDCloudHost (PT Cloud Hosting Indonesia) adalah penyedia layanan Web Hosting Provider berbasis SSD Cloud Hosting yang mempunyai tujuan untuk selalu menjaga website tetap hidup dan cepat di akses dari berbagai negara. Saat ini tersedia Beberapa Data Center Utama yang dapat Anda gunakan dengan berlangganan menggunakan layanan Kami. </p>
              <h1 className='text-sm mt-10 font-semibold' >IDCloudHost is also Available in Singapore</h1>
              <section className='flex gap-4' >
                  {
                    icon.map((val) => (
                      <span  key={val.icon} className='w-8 h-8 cursor-pointer mt-3 rounded-full flex items-center justify-center bg-gray-400 text-white' >
                        <a href="#">{val.icon}</a>
                      </span>
                    ))
                  }
              </section>
              <p className='text-gray-400 mt-3  text-sm' >Tim Support Kami siap membantu anda selama 24 jam. Hubungi <a className='text-blue-500 cursor-pointer ' >Tim Support</a></p>
          </section>
         <section className='flex w-full text-sm text-gray-400 gap-14' > 
         {
          dataMenuFooter.map((val) => (
            <ul key={val.judul} className='flex-1 flex flex-col gap-6 text-sm' >
            <li className='text-black' >{val.judul}</li>
            {
              val.menus.map((e) => (
                <li key={e} className='gap-5 ' >
                  <a href="" className='hover:text-blue-500 text-sm' >{e}</a>
                </li>
              ))
            }
          </ul>
          ))
         }
         </section>
      </section>

      <h1 className='text-sm font-bold mt-8 mb-2 ' >Accepted Payment Method</h1>
      <img src={payment} className='w-[1000px] mb-28 ' alt="" />

      <section className=" mx-auto flex mt-10 items-center justify-between">
        <p className="text-gray-600 text-sm text-center ">
          2015 - 2024 © PT Cloud Hosting Indonesia
        </p>
        <section className="flex items-center  gap-4">
          <h2 className="text-gray-800 text-sm font-semibold">
            AKREDITASI & PARTNER
          </h2>
          <div className="flex items-center gap-4">
            {imageCopyRigth.map((val, index) => (
              <img
                key={index}
                src={val.urlImage}
                alt="Footer Accreditation or Partner Logo"
                className="w-22 h-10 object-contain"
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
