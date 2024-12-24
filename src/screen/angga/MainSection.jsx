import React from 'react'
import { bannerPromo } from '../../importGambar'
import LayoutScreen from '../../components/LayoutScreen'
import { FaCircleCheck } from 'react-icons/fa6'
import Card from '../../components/angga/section1/Card'

const MainSection = ({ styling }) => {
  return (
    <LayoutScreen>
        <div className={`bg-transparent w-full mt-2 h-full flex flex-col items-center absolute z-40 top-24 ${styling} `}>
            <img src={bannerPromo} alt="banner" className='cursor-pointer'/>
            <div className="max-w-[1300px] h-full flex items-start mt-6 gap-5 relative">
                <div className="w-1/2 flex flex-col items-start gap-4 text-white">
                    <h1 className='w-full text-[61px] tracking-wider leading-snug font-bold text-wrap'>Kemudahan Layanan Server Terjangkau & Fleksibel</h1>
                    <p className='text-lg text-wrap w-[610px] tracking-wide'>Luncurkan Layanan Cloud dengan Membayar Sesuai Pemakaian dalam Sekali Klik !</p>
                    <div className="w-full flex flex-col mt-1 gap-2">
                        <div className="w-full flex items-center gap-5">
                            <FaCircleCheck className='text-2xl'/>
                            <p className='text-lg tracking-wider'>Mudah Upgrade/Downgrade Sendiri</p>
                        </div>
                        <div className="w-full flex items-center gap-5">
                            <FaCircleCheck className='text-2xl'/>
                            <p className='text-lg tracking-wider'>GRATIS Anti DDOS Protection</p>
                        </div>
                        <div className="w-full flex items-center gap-5">
                            <FaCircleCheck className='text-2xl'/>
                            <p className='text-lg tracking-wider'>One Click Apps Catalog Terlengkap</p>
                        </div>
                        <div className="w-full flex items-center gap-5">
                            <FaCircleCheck className='text-2xl'/>
                            <p className='text-lg tracking-wider'>Layanan Bantuan 24/7</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 max-h-[1440px]">
                    <Card/>
                </div>
            </div>
        </div>
    </LayoutScreen>
  )
}

export default MainSection
