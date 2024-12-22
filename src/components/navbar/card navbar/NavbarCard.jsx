import React from 'react'

const NavbarCard = ({ titleCard, descCard, titlePromo, descPromo }) => {
  return (
       <div className="absolute hidden group-hover:block w-screen max-w-6xl -left-[600px] top-full pt-4 rounded-lg">
        <div className="w-full h-full bg-slate-50 rounded-t-lg shadow-lg grid grid-cols-4 gap-6 p-4 pb-9 text-gray-700">
            <div className="w-64 h-28 bg-white/70 shadow-sm rounded-lg p-3 flex flex-col justify-center items-start gap-3">
                <h1 className='uppercase text-black font-semibold text-base'>{titleCard}</h1>
                <p className='text-xs text-zinc-500 text-wrap'>{descCard}</p>
            </div>
            <div className="w-64 h-28 bg-white/70 shadow-sm rounded-lg p-3 flex flex-col justify-center items-start gap-3">
                <h1 className='uppercase text-black font-semibold text-base'>{titleCard}</h1>
                <p className='text-xs text-zinc-500 text-wrap'>{descCard}</p>
            </div>
            <div className="w-64 h-28 bg-white/70 shadow-sm rounded-lg p-3 flex flex-col justify-center items-start gap-3">
                <h1 className='uppercase text-black font-semibold text-base'>{titleCard}</h1>
                <p className='text-xs text-zinc-500 text-wrap'>{descCard}</p>
            </div>
            <div className="w-64 h-28 bg-white/70 shadow-sm rounded-lg p-3 flex flex-col justify-center items-start gap-3">
                <h1 className='uppercase text-black font-semibold text-base'>{titleCard}</h1>
                <p className='text-xs text-zinc-500 text-wrap'>{descCard}</p>
            </div>
            <div className="w-64 h-28 bg-white/70 shadow-sm rounded-lg p-3 flex flex-col justify-center items-start gap-3">
                <h1 className='uppercase text-black font-semibold text-base'>{titleCard}</h1>
                <p className='text-xs text-zinc-500 text-wrap'>{descCard}</p>
            </div>
            <div className="w-64 h-28 bg-white/70 shadow-sm rounded-lg p-3 flex flex-col justify-center items-start gap-3">
                <h1 className='uppercase text-black font-semibold text-base'>{titleCard}</h1>
                <p className='text-xs text-zinc-500 text-wrap'>{descCard}</p>
            </div>
            <div className="w-64 h-28 bg-white/70 shadow-sm rounded-lg p-3 flex flex-col justify-center items-start gap-3">
                <h1 className='uppercase text-black font-semibold text-base'>{titleCard}</h1>
                <p className='text-xs text-zinc-500 text-wrap'>{descCard}</p>
            </div>
            <div className="w-64 h-28 bg-white/70 shadow-sm rounded- p-3 flex flex-col justify-center items-start gap-3">
                <h1 className='uppercase text-black font-semibold text-base'>{titleCard}</h1>
                <p className='text-xs text-zinc-500 text-wrap'>{descCard}</p>
            </div>
        </div>
        <div className="w-full h-36 flex justify-evenly items-center gap-10 py-5 px-7 rounded-b-lg bg-gradient-to-r from-cyan-300 to-blue-500">
            <h1 className='w-[18%] text-wrap capitalize text-4xl font-normal text-white'>{titlePromo}</h1>
            <p className='w-[65%] text-sm text-wrap text-white'>{descPromo}</p>
            <button className='flex flex-1 justify-center items-center bg-white/20  px-4 py-2 rounded-lg font-medium border border-white/40 uppercase'>selengkapnya</button>
        </div>
      </div>
  )
}

export default NavbarCard
