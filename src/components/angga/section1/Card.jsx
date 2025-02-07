// import React, { useCallback, useState } from 'react'
// import ImageSelector from './func-card/ImageSelector';
// import Slider from './func-card/Slider';

// const Card = () => {
//     const [cpu, setCpu] = useState(1);
//     const [ram, setRam] = useState(1);
//     const [storage, setStorage] = useState(20);
//     const [selectedImage, setSelectedImage] = useState('wordpress');
//     const [activeButton, setActiveButton] = useState('install')
  
//     const calculatePrice = useCallback(() => {
//       const cpuPrice = cpu * 5;
//       const ramPrice = ram * 10;
//       const storagePrice = storage * 0.5;
//       return (cpuPrice + ramPrice + storagePrice).toFixed(2);
//     }, [cpu, ram, storage]);

//   return (
//     <div className="h-[880px] bg-trannsparent flex flex-col items-center absolute z-40 -top-2 right-[10px] mt-2">
//         <div className="max-w-[655px] h-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
//             <div className="w-full h-full p-10">
//                 <div className="flex justify-evenly items-center mb-8">
//                     <button 
//                         onClick={() => setActiveButton('install')} 
//                         className={`w-36 h-10 px-1 py-1 text-base bg-white text-gray-700 duration-500 ease-in-out transition-all hover:bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] hover:text-white rounded-full font-medium ${activeButton === 'install' ? 'bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] text-white' : ''}`}
//                     >
//                         INSTALL APP
//                     </button>
//                     <button
//                         onClick={() => setActiveButton('vm')}
//                         className={`w-36 h-10 px-1 py-1 text-base bg-white text-gray-700 duration-500 ease-in-out transition-all hover:bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] hover:text-white rounded-full font-medium ${activeButton === 'vm' ? 'bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] text-white' : ''}`}
//                     >
//                         BUAT VM
//                     </button>
//                 </div>

//                 <Slider
//                     label="CPU"
//                     value={cpu}
//                     unit="Core"
//                     min={1}
//                     max={16}
//                     step={()=> setCpu(cpu * 2)}
//                     onChange={setCpu}
//                 />

//                 <Slider
//                     label="RAM"
//                     value={ram}
//                     unit="GB"
//                     min={1}
//                     max={64}
//                     step={1}
//                     onChange={setRam}
//                 />

//                 <Slider
//                     label="Storage"
//                     value={storage}
//                     unit="GB"
//                     min={20}
//                     max={510}
//                     step={10}
//                     onChange={setStorage}
//                 />

//                 <div className="mb-8">
//                 <ImageSelector
//                     selectedImage={selectedImage}
//                     onSelect={setSelectedImage}
//                 />
//                 </div>

//                 <div className="flex justify-between items-center mt-16">
//                     <div className="text-4xl font-bold">
//                         Rp {calculatePrice()}
//                     </div>
//                     <button className="px-6 py-2 bg-[#45a2ff] text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
//                         DEPLOY NOW
//                     </button>
//                 </div>

//                 <p className="w-full text-sm text-gray-500 mt-6">
//                 *Untuk informasi ketersediaan dan detail lebih lanjut silahkan login terlebih dahulu
//                 </p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Card


// responsive version
import React, { useCallback, useState } from 'react'
import ImageSelector from './func-card/ImageSelector';
import Slider from './func-card/Slider';

const Card = () => {
    const [cpu, setCpu] = useState(1);
    const [ram, setRam] = useState(1);
    const [storage, setStorage] = useState(20);
    const [selectedImage, setSelectedImage] = useState('wordpress');
    const [activeButton, setActiveButton] = useState('install')
  
    const calculatePrice = useCallback(() => {
      const cpuPrice = cpu * 5;
      const ramPrice = ram * 10;
      const storagePrice = storage * 0.5;
      return (cpuPrice + ramPrice + storagePrice).toFixed(2);
    }, [cpu, ram, storage]);

  return (
    <div className="w-full lg:h-[880px] bg-transparent flex flex-col items-center sm:mt-6 lg:absolute lg:z-40 lg:-top-4 lg:-right-[380px]">
        <div className="w-full max-sm:max-w-[350px] sm:max-w-[520px] lg:max-w-[655px] bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-10">
            <div className="w-full h-full p-10">
                <div className="flex justify-evenly items-center mb-8">
                    <button 
                        onClick={() => setActiveButton('install')} 
                        className={`w-36 h-10 px-1 py-1 text-base bg-white text-gray-700 duration-500 ease-in-out transition-all hover:bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] hover:text-white rounded-full font-medium ${activeButton === 'install' ? 'bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] text-white' : ''}`}
                    >
                        INSTALL APP
                    </button>
                    <button
                        onClick={() => setActiveButton('vm')}
                        className={`w-36 h-10 px-1 py-1 text-base bg-white text-gray-700 duration-500 ease-in-out transition-all hover:bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] hover:text-white rounded-full font-medium ${activeButton === 'vm' ? 'bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] text-white' : ''}`}
                    >
                        BUAT VM
                    </button>
                </div>

                <Slider
                    label="CPU"
                    value={cpu}
                    unit="Core"
                    min={1}
                    max={16}
                    step={()=> setCpu(cpu * 2)}
                    onChange={setCpu}
                />

                <Slider
                    label="RAM"
                    value={ram}
                    unit="GB"
                    min={1}
                    max={64}
                    step={1}
                    onChange={setRam}
                />

                <Slider
                    label="Storage"
                    value={storage}
                    unit="GB"
                    min={20}
                    max={510}
                    step={10}
                    onChange={setStorage}
                />

                <div className="mb-8">
                    <ImageSelector
                        selectedImage={selectedImage}
                        onSelect={setSelectedImage}
                    />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-8 lg:mt-16">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        Rp {calculatePrice()}
                    </div>
                    <button className="w-full sm:w-auto px-6 py-2 bg-[#45a2ff] text-white rounded-md">
                        DEPLOY NOW
                    </button>
                </div>

                <p className="w-full text-sm text-gray-500 mt-6">
                *Untuk informasi ketersediaan dan detail lebih lanjut silahkan login terlebih dahulu
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card
