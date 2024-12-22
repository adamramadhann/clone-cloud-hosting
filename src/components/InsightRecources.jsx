import React, { useState } from 'react';
import LayoutScreen from './LayoutScreen';

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
    <section className="bg-[#101F43] mb-44 relative bottom-0 h-[700px] flex flex-col justify-center w-full " style={{ borderRadius: "50% 50% 0 0 / 15% 15% 0 0" }}>
  <LayoutScreen>
    <div className="w-full relative flex gap-10">
      {/* Kolom Kiri */}
      <div className="w-[700px] flex flex-col gap-5 text-white">
        <h1 className="text-transparent tracking-wide bg-clip-text bg-gradient-to-b font-bold text-5xl to-[#EB6BD0] from-[#F09B6B]">
          Solusi Sempurna untuk Bisnis Anda
        </h1>
        <p className="text-lg">
          Dalam Waktu 3 Menit, Anda akan mendapatkan semua layanan dengan cepat.
          Tidak ada kewajiban untuk upgrade, downgrade atau cancel setiap waktu
        </p>
        <span className="flex items-center gap-4">
          <button className="border border-white px-3 py-2 text-white hover:text-black bg-blue-400 rounded-md">
            Buat Private Cloud
          </button>
          <button className="border border-black bg-gray-400/30 rounded-md px-3 py-2 text-white hover:text-black">
            Hubungi Kami
          </button>
        </span>
      </div>

      {/* Kolom Kanan */}
      <div className=" -bottom-[420px] relative px-10 flex flex-col gap-5 z-50 justify-center w-[500px] h-[120px] rounded-md bg-gradient-to-tl to-[#639DF6] from-[#785BF4] ">
          <h1 className='text-xs z-50 text-white' >subcribe here to get update</h1>
          <span className='flex  z-50 justify-between gap-2 w-full' >
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className='w-[60%] py-2 z-50 pl-2 text-sm bg-white/30 outline-none border border-white scale-100 focus:scale-100 focus:border-none placeholder:text-white text-white rounded-md'
            placeholder='Enter email address..'

          />
          <button onClick={handleINput} className='w-[40%] z-50 py-2 bg-white/30 text-sm border border-white text-white rounded-md' >SUBCRIBE</button>
          </span>
      </div>
    </div>
          <img src="src/assets/image.png" className='absolute z-0 right-[220px] top-[220px]' alt="" />
  </LayoutScreen>
</section>


  );f
};

export default InsightRecources;