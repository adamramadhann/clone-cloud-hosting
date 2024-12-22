import React from 'react'
import Footer from './screen/Footer'
import InsightsResourcesScreen from './screen/InsightsResourcesScreen'
import Navbar from './components/navbar/Navbar'
import MainSection from './screen/angga/MainSection'


const App = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-44 w-full overflow-x-hidden ' >
      <div className="w-svw h-[850px] rounded-b-[45%] pt-[95px] aspect-square scale-150 -translate-x-3 bg-gradient-to-br from-[#2f91fa] via-[#277ee8] to-[#1449b3] relative"/>
        <Navbar styling={'scale-100 absolute z-50 top-2 left-1/2 -translate-x-1/2'}/>
        <MainSection styling={'scale-100 absolute z-40 top-24 left-1/2 -translate-x-1/2'} />

        <InsightsResourcesScreen/>
        <Footer/>
    </div>
  )
}

export default App