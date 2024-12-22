import React from 'react'
import { bannerPromo } from '../../importGambar'
import LayoutScreen from '../../components/LayoutScreen'
import { FaCircleCheck } from 'react-icons/fa6'
import Card from '../../components/angga/section1/Card'

const MainSection = () => {
  return (
    <LayoutScreen>
        <div className='bg-transparent max-w-[1000px] mt-2 h-full flex flex-col items-center'>
            <img src={bannerPromo} alt="banner" className='w-[86%] cursor-pointer'/>
            <div className="w-full h-full flex items-start mt-5">
                <div className="w-1/2 flex flex-col items-start gap-4 text-white">
                    <h1 className='w-full text-[49px] tracking-wide leading-snug font-bold text-wrap'>Kemudahan Layanan Server Terjangkau & Fleksibel</h1>
                    <p>Luncurkan Layanan Cloud dengan Membayar Sesuai Pemakaian dalam Sekali Klik !</p>
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex items-center gap-4">
                            <FaCircleCheck className='text-xl'/>
                            <p>Mudah Upgrade/Downgrade Sendiri</p>
                        </div>
                        <div className="w-full flex items-center gap-4">
                            <FaCircleCheck className='text-xl'/>
                            <p>GRATIS Anti DDOS Protection</p>
                        </div>
                        <div className="w-full flex items-center gap-4">
                            <FaCircleCheck className='text-xl'/>
                            <p>One Click Apps Catalog Terlengkap</p>
                        </div>
                        <div className="w-full flex items-center gap-4">
                            <FaCircleCheck className='text-xl'/>
                            <p>Layanan Bantuan 24/7</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    <Card/>
                </div>
            </div>
        </div>
    </LayoutScreen>
  )
}

export default MainSection
