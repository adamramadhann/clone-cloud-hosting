import React from 'react'
import LayoutScreen from '../components/LayoutScreen'
import { CiSquareQuestion } from 'react-icons/ci'
import { GrServerCluster } from 'react-icons/gr'
import { FaCode } from 'react-icons/fa'
import { PiBookBold } from 'react-icons/pi'
import InsightRecources from '../components/InsightRecources'

const InsightsResourcesScreen = () => {
    const iconMenu = [
        {
            title : 'Panduan',
            icon : <CiSquareQuestion size={40} color='white' />
        },
        {
            title : 'Server Status',
            icon : <GrServerCluster size={30} color='white' />
        },
        {
            title : 'IDCloudsHost APIs',
            icon : <FaCode size={30} color='white' />
        },
        {
            title : 'TOS',
            icon : <PiBookBold size={30} color='white' />
        },
    ]
  return (
    <div className='w-full h-auto  flex flex-col gap-64 mt-56' >
        <LayoutScreen>
        <section className=' flex items-center justify-center flex-col h-full  ' >
            <h1 className='text-5xl h-[120px] text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-pink-400 to-violet-500 font-bold mb-10' >Insights & Resgources</h1>
            <div className='flex items-center gap-36' >
            {
                iconMenu.map((val, index) => (
                    <div key={index} className='flex cursor-pointer items-center flex-col gap-5' > 
                        <span className='w-20 flex items-center justify-center h-20 rounded-full bg-gradient-to-r from-pink-400 to-violet-500 ' >
                            {val.icon}
                        </span>
                        <h1 className='font-bold text-xl ' >{val.title}</h1>
                    </div>
                ))
            }
            </div>
        </section>
    </LayoutScreen>
    <InsightRecources/>
    </div>
  )
}

export default InsightsResourcesScreen