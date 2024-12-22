import React from 'react';
import { bareMetal, cloudVps, colocation, cyberpanel, dedicatedServer, kubernetes, manageVpsWhm, objectStorage, serverVps } from '../../../importGambar';

const MenuItemProduct = ({ title, badge }) => {
  return (
    <div className="flex items-center p-2 hover:bg-[#99c8fcbb] hover:rounded-md ">
      {/* icon milik Cloud & Server */}
      {title === "Cloud VPS" && <img src={cloudVps} alt="" className='w-7 h-6' />}
      {title === "Server VPS" && <img src={serverVps} alt="" className='w-7 h-6' />}
      {title === "Bare Metal Server" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Dedicated Server" && <img src={dedicatedServer} alt="" className='w-7 h-6' />}
      {title === "Manage VPS WHM" && <img src={manageVpsWhm} alt="" className='w-7 h-6' />}
      {title === "Cyberpanel VPS" && <img src={cyberpanel} alt="" className='w-7 h-6' />}
      {title === "Colocation Server" && <img src={colocation} alt="" className='w-7 h-6' />}
      {title === "Object Storage (S3)" && <img src={objectStorage} alt="" className='w-7 h-6' />}
      {title === "Kubernetes" && <img src={kubernetes} alt="" className='w-7 h-6' />}

      {/* icon milik Domain & Website */}
      {title === "Domain" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Cloud Hosting" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "WordPress Hosting" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Website Instant" && <img src={bareMetal} alt="" className='w-7 h-6' />}

      {/* icon milik Developer Tools */}
      {title === "API" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Support" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Server Status" && <img src={bareMetal} alt="" className='w-7 h-6' />}

      {/* icons milik Solutions & Addons */}
      {title === "Email Solution" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Cyber Security Services" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Backup Solution" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Pindah / Transfer" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Manage Service" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Reseller Service" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Sertifikat SSL" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Lisensi" && <img src={bareMetal} alt="" className='w-7 h-6' />}
      {title === "Cloud Storage Drive" && <img src={bareMetal} alt="" className='w-7 h-6' />}

      <span className="text-xs hover:text-blue-500 cursor-pointer px-2">{title}</span>
      {badge && (
        <span className={`text-xs px-2 py-0.5 rounded ${badge === 'HOT' ? 'bg-red-500 text-white' : badge === 'NVME' ? 'bg-pink-500 text-white' : badge === 'Tier IV' ? 'bg-red-500 text-white' :  badge === "B2B Choose" ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'
        }`}>
          {badge}
        </span>
      )}
    </div>
  );
};

export default MenuItemProduct;