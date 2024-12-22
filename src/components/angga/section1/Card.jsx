import React, { useCallback, useState } from 'react'
import ImageSelector from './func-card/ImageSelector';
import Slider from './func-card/Slider';

const Card = () => {
    const [cpu, setCpu] = useState(1);
    const [ram, setRam] = useState(1);
    const [storage, setStorage] = useState(20);
    const [selectedImage, setSelectedImage] = useState('wordpress');
    const [selectButton, setSelectButton] = useState(false);
  
    const calculatePrice = useCallback(() => {
      const cpuPrice = cpu * 5;
      const ramPrice = ram * 10;
      const storagePrice = storage * 0.5;
      return (cpuPrice + ramPrice + storagePrice).toFixed(2);
    }, [cpu, ram, storage]);

  return (
    <div className="h-full bg-transparent px-4">
        <div className="max-w-[700px] max-h-[700px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="pb-16 pt-10 px-10">
                <div className="flex justify-evenly items-center mb-8">
                    <button 
                        onClick={() => setSelectButton(!selectButton)} 
                        className={`px-6 py-2 text-sm bg-white text-gray-700 duration-500 ease-in-out transition-all hover:bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] hover:text-white rounded-full font-medium ${selectButton ? 'bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] text-white' : ''}`}
                    >
                        INSTALL APP
                    </button>
                    <button
                        className={`px-6 py-2 text-sm bg-white text-gray-700 duration-500 ease-in-out transition-all hover:bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] hover:text-white rounded-full font-medium ${selectButton ? 'bg-gradient-to-br from-[#fc9c5b] to-[#fc56e3] text-white' : ''}`}
                        onClick={() => setSelectButton(!selectButton)}
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
                    step={1}
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

                <div className="flex justify-between items-center mt-8">
                <div className="text-2xl font-bold">
                    Rp {calculatePrice()}
                </div>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    DEPLOY NOW
                </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                *Untuk informasi ketersediaan dan detail lebih lanjut silahkan login terlebih dahulu
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card
