import React from 'react'
import { CiSquareQuestion } from 'react-icons/ci'
import { GrServerCluster } from 'react-icons/gr'
import { FaCode } from 'react-icons/fa'
import { PiBookBold } from 'react-icons/pi'
import LayoutScreen from '../../LayoutScreen'


const InsightRecourcesIconMenu = () => {
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
    <LayoutScreen>
            <section className=' flex items-center justify-center -mt-20 flex-col h-full mb-60  ' >
                <h1 className='text-6xl h-[120px] text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-[#d24df0] to-[#914df7] font-bold mb-10' >Insights & Resgources</h1>
                <div className='flex items-center gap-5' >
                {
                    iconMenu.map((val, index) => (
                        <div key={index} className='flex cursor-pointer items-center flex-col gap-5 w-[280px] h-[219px] shadow-lg    justify-center rounded-lg ' > 
                            <span className='w-20 flex items-center justify-center h-20 rounded-full bg-gradient-to-br from-[#e24ced] to-[#814dfa] ' >
                                {val.icon}
                            </span>
                            <h1 className='font-bold text-xl ' >{val.title}</h1>
                        </div>
                    ))
                }
                </div>
            </section>
    </LayoutScreen>
  )
}

export default InsightRecourcesIconMenu