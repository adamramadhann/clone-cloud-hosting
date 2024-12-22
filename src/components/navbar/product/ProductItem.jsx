// ProductItem.jsx
import React from 'react';
import { backup, bareMetal, cloudVps, serverVps } from '../../../importGambar';

const ProductItem = ({ title, description }) => {
  return (
    <div className="space-y-1 cursor-pointer p-2 hover:bg-[#99c8fcbb] hover:rounded-md">
        <div className="flex justify-start gap-3">
            {title === "Cloud VPS" && <img src={cloudVps} alt="" className='w-7 h-6' />}
            {title === "Server VPS" && <img src={serverVps} alt="" className='w-7 h-6' />}
            {title === "Bare Metal Server" && <img src={bareMetal} alt="" className='w-7 h-6' />}
            {title === "Backup as a Service" && <img src={backup} alt="" className='w-6 h-6' />}
            <h4 className="font-base">{title}</h4>
        </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ProductItem;