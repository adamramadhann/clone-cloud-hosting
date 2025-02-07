import React from 'react'
import LayoutScreen from '../../../components/LayoutScreen'
import { controlerApiBottom, controlerApiCenter, controlerApiTop } from '../../../importGambar'

const ControlPanelApi = () => {


    const dataControlPanel = [
        {
            judul : 'One-Click Deploy',
            descripsi : 'Dapatkan kemudahan dalam melakukan instalasi berbagai Control Panel, Virtual Machine (VM), Operation System (OS), Aplikasi dan lainnya dengan Fitur One-Click Deploy dari layanan Private Cloud IDCloudhost dalam waktu kurang dari 60 detik.',
            img : controlerApiTop

        },
        {
            judul : 'Easy Managed',
            descripsi : 'Control Panel akan membuat berbagai kemudahan dalam melakukan manage server secara mandiri dan dapat melakukan berbagai kegiatan seperti berlangganan server, manage backup, memperkirakan pembayaran dengan cepat dan praktis.',
            img : controlerApiCenter
        },
        {
            judul : 'Powerful API',
            descripsi : ' Dapat melakukan berbagai kegiatan secara otomatis dengan menggunakan API dari IDCloudHost. Setiap Tindakan dan Eksekusi yang dilakukan dapat dilakukan secara otomatis kedalam sistem dengan Aman, Cepat, dan Praktis.',
            img : controlerApiBottom
    
        },
    ]

  return (
    <LayoutScreen>
           <section className='sm:mx-28' >
           <section className=' text-white p-5 sm:p-20 py-10 sm:px-28 bg-[#101F43] w-full h-auto rounded-3xl flex justify-center items-center relative  ' >
                <div className=' flex  flex-col ' >
                    <h1 className='sm:text-[1.5rem] text-[1rem] w-[220px]  mb-10 sm:leading-[50px] text-[#64686e]'  >Powerfull Control Panel & API </h1>
                    <section  className='flex mt-28 w-full items-center justify-center ' >
                        <section  className='flex -mt-[130px] flex-col gap-20  flex-1 items-center  ' >
                            {
                                dataControlPanel.map((val, index) => (
                                    <span key={index} className='flex flex-col gap-5 sm:gap-10 sm:flex-row w-full' >
                                        <span className='flex-1 ' >
                                            <h1 style={{background: 'linear-gradient(345.65deg, -.61%, 100%)'}} className='sm:text-[40px] text-3xl mb-10 text-transparent bg-gradient-to-tr from-[#fd4df6] to-[#fda14d] bg-clip-text ' >{val.judul}</h1>
                                            <p className='text-[#8292a6] text-justify sm:text-[1.2rem] leading-7 text-sm  ' >{val.descripsi}</p>
                                        </span>
                                        <img src={val.img} className='w-[650px] mt-5 sm:mt-0 object-cover' alt="" />
                                    </span>
                                ))
                            }
                        </section >
                    </section >
                </div>
            </section>
           </section>
    </LayoutScreen>
  )
}

export default ControlPanelApi