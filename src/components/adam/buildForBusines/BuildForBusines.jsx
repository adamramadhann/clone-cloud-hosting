import React from 'react'
import LayoutScreen from '../../../components/LayoutScreen'
import { CiSquareQuestion } from 'react-icons/ci'
import { GrServerCluster } from 'react-icons/gr'
import { FaCode } from 'react-icons/fa'
import { PiBookBold } from 'react-icons/pi'
import { AiOutlineRight } from 'react-icons/ai'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'

const BuildForBusines = () => {
    const dataBuild = [
        {
            title : 'Platform Terbaik',
            icon : <IoShieldCheckmarkOutline size={40} color='white' />,
            deskripsi : ' Layanan sudah dipercaya lebih dari +300.000 pengguna diseluruh Indonesia dengan jaminan SLA 99.5% untuk mendukung Bisnis/Startup Anda.',
            buttonTeks : 'Security'
        },
        {
            title : 'Harga Termurah',
            icon : <GrServerCluster size={30} color='white' />,
            deskripsi : 'IDcloudhost menawarkan Harga yang termurah dibandingkan infrastruktur Cloud lainnya di dunia dan dapat menghemat lebih 50% Pengeluaran.',
            buttonTeks : 'Pricing'
        },
        {
            title : 'Support 24/7',
            icon : <FaCode size={30} color='white' />,
            deskripsi : 'Tim Support melayani setiap waktu & mempunyai pengalaman & bersertifikasi internasional di bidangnya untuk membantu permasalahan Anda.',
            buttonTeks : 'Support'
        },
        {
            title : 'Provasi & Keamanan',
            icon : <PiBookBold size={30} color='white' />,
            deskripsi : 'Kami Menjamin dan melindungi setiap privasi dan keamanan data anda dengan menggunakan berbagai teknologi terbaru dan terbaik.',
            buttonTeks : 'Compliance'
        },
    ]

  return (
    <LayoutScreen>
            <section id="buildForBusines"  className=' flex items-center justify-center flex-col h-full  ' >
                <h1 className='sm:text-6xl text-5xl h-[120px] text-transparent bg-clip-text text-center tracking-wide bg-gradient-to-r to-[#fd4df6] from-[#fda14d] font-bold mb-5' >Built For Business</h1>
                <div className='flex w-full  justify-evenly overflow-auto items-center gap-3 sm:gap-1 bg-gradient-to-b from-slate-50/30 to-slate-100/40 sm:w-[1180px] h-[437px] py-3 rounded-lg' >
                {
                    dataBuild.map((val, index) => (
                        <div key={index} className='flex  items-center flex-col gap-8 py-10 px-4 rounded-lg bg-white' > 
                            <span style={{background : 'linear-gradient(314.65deg,#fd4df6 -.61%,#fda14d 100%)'}} className='w-20 flex items-center justify-center h-20 rounded-full  ' >
                                {val.icon}
                            </span>
                            <div className='flex items-center w-[250px] h-[220px] relative gap-3 flex-col' >
                                <h1 className='font-bold text-lg ' >{val.title}</h1>
                                <p className='text-center leading-7 w-[239px] h-[150px] text-[15px] text-wrap text-gray-400 ' >{val.deskripsi}</p>
                                <button className='flex items-center text-sm gap-3 absolute bottom-0  text-blue-500' >{val.buttonTeks} <AiOutlineRight/></button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
    </LayoutScreen>
  )
}

export default BuildForBusines