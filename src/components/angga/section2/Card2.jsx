// import React from 'react'
// import { bannerCustomer } from '../../../importGambar'

// const Card2 = () => {
//   return (
//     <div className='w-full mx-auto'>
//       <div className="w-[1320px] h-[270px] rounded-3xl bg-gradient-to-r from-[#4e7dfc] to-[#4eeaf2] flex">
//         <div className="w-[50%] h-full flex flex-col items-start gap-4 p-9 text-white ">
//           <h1 className='text-wrap text-2xl leading-relaxed font-medium '>Lebih Dari 300 rb+ customer <br />Telah Menggunakan IDCloudHost.</h1>
//           <div className="w-full flex justify-start items-start gap-16 mb-2">
//             <div className="flex flex-col items-start">
//               <h1 className='text-2xl font-semibold'>9</h1>
//               <p className='text-sm text-[#cce2ff]'>Data Center</p>
//             </div>
//             <div className="flex flex-col items-start">
//               <h1 className='text-2xl font-semibold'>20 rb+</h1>
//               <p className='text-sm text-[#cce2ff]'>VM Created</p>
//             </div>
//             <div className="flex flex-col items-start">
//               <h1 className='text-2xl font-semibold'>2000</h1>
//               <p className='text-sm text-[#cce2ff]'>Liputan Media</p>
//             </div>
//           </div>
//           <p className='text-lg'>Mulai Rencanakan Digitalisasi Bersama IDCloudhost</p>
//         </div>
//         <div className="flex flex-1">
//           <img src={bannerCustomer} alt="" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card2

// responsive ver
import React from 'react'
import { bannerCustomer } from '../../../importGambar'

const Card2 = () => {
  return (
    <div className='w-full px-4 sm:px-6 lg:px-0'>
      <div className="w-full max-w-[1320px] min-h-[270px] rounded-xl sm:rounded-3xl bg-gradient-to-r from-[#4e7dfc] to-[#4eeaf2] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] flex flex-col items-start gap-4 p-6 sm:p-8 lg:p-9 text-white">
          <h1 className='text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium'>Lebih Dari 300 rb+ customer <br className="hidden sm:block"/>Telah Menggunakan IDCloudHost.</h1>
          <div className="w-full flex flex-wrap lg:flex-nowrap justify-start gap-6 sm:gap-8 lg:gap-16 mb-2">
            <div className="flex flex-col items-start">
              <h1 className='text-2xl font-semibold'>9</h1>
              <p className='text-sm text-[#cce2ff]'>Data Center</p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className='text-2xl font-semibold'>20 rb+</h1>
              <p className='text-sm text-[#cce2ff]'>VM Created</p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className='text-2xl font-semibold'>2000</h1>
              <p className='text-sm text-[#cce2ff]'>Liputan Media</p>
            </div>
          </div>
          <p className='text-lg'>Mulai Rencanakan Digitalisasi Bersama IDCloudhost</p>
        </div>
        <div className=" lg:flex flex-1">
          <img src={bannerCustomer} alt=""  className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default Card2
