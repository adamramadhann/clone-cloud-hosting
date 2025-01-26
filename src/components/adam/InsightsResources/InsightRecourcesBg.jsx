import React, { useState } from 'react';
import LayoutScreen from '../../LayoutScreen';
import { user } from '../../../importGambar';

const InsightRecources = () => {

  const [email, setEmail] = useState('')

  const handleINput = () => {
    if(!email) {
      return alert('email harus diisni')
    } else {
      alert(email)
    }
  }
  return (
    <section className="bg-[#101F43]  relative bottom-10 h-[1300px] sm:h-[700px] flex flex-col justify-center w-full rounded-[250%_250%_0_0/_15%_15%_0_0] sm:rounded-[50%_50%_0_0/_15%_15%_0_0] ">
      <LayoutScreen>
          <div className="w-full relative  flex gap-10">
            {/* Kolom Kiri */}
            <div className="w-[700px]  flex flex-col gap-16 sm:gap-5 text-white">
              <h1 className="text-transparent -mt-20 sm:mt-20 tracking-wide bg-clip-text bg-gradient-to-b font-bold text-5xl to-[#EB6BD0] from-[#F09B6B]">
                Solusi Sempurna untuk Bisnis Anda
              </h1>
              <p className="text-lg">
                Dalam Waktu 3 Menit, Anda akan mendapatkan semua layanan dengan cepat.
                Tidak ada kewajiban untuk upgrade, downgrade atau cancel setiap waktu
              </p>
              <span className="flex items-center flex-col sm:flex-row  gap-4">
                <button className=" sm:w-[192px] w-full h-12 text-white hover:text-black bg-blue-400 rounded-md">
                  Buat Private Cloud
                </button>
                <button className="outline outline-2 bg-gray-400/30 rounded-md w-full sm:w-[162px] h-12 outline-white text-white hover:text-black">
                  Hubungi Kami
                </button>
              </span>
            </div>
            {/* Kolom Kanan */}
          </div>
      </LayoutScreen>
      <section className='absolute -bottom-12 sm:-left-[580px] sm:translate-x-1/2  left-1/2 -translate-x-1/2 w-full' >
      <section className='relative w-full flex flex-col items-center justify-center ' >
        <img src={user} className=' -z-10 -mb-5   -bottom-5  w-[290px] h-[290px] sm:w-[490px] sm:h-[490px]  sm:right-[300px] sm:top-[220px]' alt="" />
            <div className="  sm:right-16 z-50 sm: sm:px-8 p-4 flex flex-col gap-2 justify-center w-[320px] sm:w-[493px] sm:h-[134px] sm:left-0 left-1/2 sm:translate-x-0  h-[100px] rounded-xl bg-gradient-to-tl to-[#639DF6] from-[#785BF4] ">
                <h1 className=' texrelativet-xs sm:text-sm z-50 text-white' >subcribe here to get update</h1>
                <span className='flex  z-50 justify-between items-center gap-2 w-full' >
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className='sm:w-[283px] w-[200px] sm:h-12 h-10  z-50 pl-2 text-base bg-white/30 outline-none border border-white scale-100 focus:scale-100 focus:border-none placeholder:text-white text-white rounded-md'
                  placeholder='Enter email address..'

                />
                <button onClick={handleINput} className='w-[132px] p-2 sm:h-12 h-10 z-50 flex items-center justify-center bg-white/30 text-xs sm:text-base border border-white text-white rounded-md' >SUBCRIBE</button>
                </span>
            </div>
      </section>
      </section>
    </section>
  );
};

export default InsightRecources;
