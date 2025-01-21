import React from 'react'
import LayoutScreen from '../../../components/LayoutScreen'
import { controlerApi } from '../../../importGambar'

const ControlPanelApi = () => {


    const dataControlPanel = [
        {
            judul : 'One-Click Deploy',
            descripsi : 'Dapatkan kemudahan dalam melakukan instalasi berbagai Control Panel, Virtual Machine (VM), Operation System (OS), Aplikasi dan lainnya dengan Fitur One-Click Deploy dari layanan Private Cloud IDCloudhost dalam waktu kurang dari 60 detik.',

        },
        {
            judul : 'Easy Managed',
            descripsi : 'Control Panel akan membuat berbagai kemudahan dalam melakukan manage server secara mandiri dan dapat melakukan berbagai kegiatan seperti berlangganan server, manage backup, memperkirakan pembayaran dengan cepat dan praktis.'
        },
        {
            judul : 'Powerful API',
            descripsi : ' Dapat melakukan berbagai kegiatan secara otomatis dengan menggunakan API dari IDCloudHost. Setiap Tindakan dan Eksekusi yang dilakukan dapat dilakukan secara otomatis kedalam sistem dengan Aman, Cepat, dan Praktis.'
        },
    ]

  return (
    <LayoutScreen>
           <section className='mx-28' >
           <section className=' text-white  py-20 bg-[#101F43] w-full h-auto rounded-3xl flex justify-center items-center relative  ' >
                <div className=' flex flex-col ' >
                    <h1 className='text-[2.5rem] mb-10 leading-[50px] text-[#64686e]'  >Powerfull Control <br /> Panel& API </h1>
                    <div className='flex  w-full items-center justify-center ' >
                        <div className='flex -mt-[130px] flex-col  max-w-[300px] flex-1 items-center gap-40 ' >
                            {
                                dataControlPanel.map((val, index) => (
                                    <span key={index} >
                                        <h1 style={{background: 'linear-gradient(345.65deg, -.61%, 100%)'}} className='text-[40px] mb-10 text-transparent bg-gradient-to-tr from-[#fd4df6] to-[#fda14d] bg-clip-text ' >{val.judul}</h1>
                                        <p className='text-[#8292a6] text-[1rem]' >{val.descripsi}</p>
                                    </span>
                                ))
                            }
                        </div>
                    <div className='flex-1  ml-4 ' >
                        <img src={controlerApi}  alt="" />
                    </div>
                    </div>
                </div>
            </section>
           </section>
    </LayoutScreen>
  )
}

export default ControlPanelApi