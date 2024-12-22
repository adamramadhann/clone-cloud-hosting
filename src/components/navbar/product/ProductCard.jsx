// ProductCard.jsx
import React from 'react';
import ProductItem from './ProductItem';
import MenuItemProduct from './MenuItemProduct';

const ProductCard = () => {
  return (
    <div className="absolute hidden group-hover:block w-screen max-w-6xl -left-96 top-full pt-4 rounded-lg">
      <div className="w-full h-full bg-white rounded-lg shadow-lg grid grid-cols-4 gap-6 text-gray-700">
        <div className='bg-slate-100 w-full h-full p-6 rounded-tl-lg'>
          <h3 className="font-semibold text-black mb-4 border-l-2 border-blue-500 pl-2">FEATURED PRODUCTS</h3>
          <div className="space-y-4 group">
            <ProductItem
              title="Cloud VPS"
              description="Layanan Full Cloud Access dan Scale Up You Grow yang pertama di Indonesia."
            />
            <ProductItem
              title="Server VPS"
              description="Layanan Server VPS Indonesia terjangkau dan terbaik untuk kebutuhan website dan aplikasi Bisnis Anda."
            />
            <ProductItem
              title="Bare Metal Server"
              description="Kenyamanan layanan cloud yang berpadu dengan kontrol serta kinerja on premises server."
            />
            <ProductItem
              title="Backup as a Service"
              description="Solusi cadangan data yang aman dan fleksibel untuk melindungi bisnis Anda."
            />
          </div>
        </div>

        <div className='bg-white w-full h-full p-6'>
          <h3 className="font-semibold text-black mb-4 border-l-2 border-blue-500 pl-2">CLOUD & SERVER</h3>
          <div className="space-y-4">
            <MenuItemProduct title="Cloud VPS" badge="HOT" />
            <MenuItemProduct title="Server VPS" badge="NVME" />
            <MenuItemProduct title="Bare Metal Server" badge="Tier IV" />
            <MenuItemProduct title="Dedicated Server" />
            <MenuItemProduct title="Manage VPS WHM" />
            <MenuItemProduct title="Cyberpanel VPS" />
            <MenuItemProduct title="Colocation Server" />
            <MenuItemProduct title="Object Storage (S3)" />
            <MenuItemProduct title="Kubernetes" badge="B2B Choose" />
          </div>
        </div>

        <div className='bg-white w-full h-full p-6'>
          <div className="flex flex-col">
            <h3 className="font-semibold text-black mb-4 border-l-2 border-blue-500 pl-2">DOMAIN & WEBSITE</h3>
            <div className="space-y-4">
              <MenuItemProduct title="Domain" />
              <MenuItemProduct title="Cloud Hosting" badge="NVME" />
              <MenuItemProduct title="WordPress Hosting" />
              <MenuItemProduct title="Website Instant" badge="UMKM" />
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h3 className="font-semibold text-black mb-4 border-l-2 border-blue-500 pl-2">DEVELOPER TOOLS</h3>
            <div className="space-y-4">
              <MenuItemProduct title="API" />
              <MenuItemProduct title="Support" />
              <MenuItemProduct title="Server Status" />
            </div>
          </div>
        </div>

        <div className='bg-white w-full h-full p-6 rounded-tr-lg'>
          <h3 className="font-semibold text-black mb-4 border-l-2 border-blue-500 pl-2">SOLUTIONS & ADDONS</h3>
          <div className="space-y-4">
            <MenuItemProduct title="Email Solution" />
            <MenuItemProduct title="Cyber Security Services" badge="HOT" />
            <MenuItemProduct title="Backup Solution" badge="HOT" />
            <MenuItemProduct title="Pindah / Transfer" />
            <MenuItemProduct title="Manage Service" />
            <MenuItemProduct title="Reseller Service" />
            <MenuItemProduct title="Sertifikat SSL" />
            <MenuItemProduct title="Lisensi" />
            <MenuItemProduct title="Cloud Storage Drive" />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-evenly items-center gap-3 py-5 px-8 rounded-b-lg bg-gradient-to-r from-cyan-300 to-blue-500">
        <h1 className='w-[18%] text-wrap capitalize text-4xl text-white'>request penawaran</h1>
        <p className='w-[65%] text-sm text-wrap text-white'>Anda Membutuhkan spesifikasi server custom untuk kebutuhan Anda ? Silakan mengajukan formulir request penawaran server Custom yang akan dibantu oleh tim IDCloudhost. Konsultasi GRATIS!</p>
        <button className='flex flex-1 justify-center items-center bg-white/20  px-4 py-2 rounded-lg font-medium border border-white/40 uppercase'>selengkapnya</button>
      </div>
    </div>
  );
};

export default ProductCard;