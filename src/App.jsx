import React from 'react'
import Navbar from './components/navbar/Navbar'
import MainSection from './screen/angga/MainSection'
import SecondSection from './screen/angga/SecondSection'
import Footer from './screen/adam/Footer'
import InsightsResourcesScreen from './screen/adam/InsightsResourcesScreen'


const App = () => {
  return (
    <div className='bg-[#ffffff] flex flex-col justify-center items-center gap-12 w-full overflow-x-hidden ' >
      <div className="w-svw h-[850px] rounded-b-[45%] pt-[95px] aspect-square scale-150 -translate-x-3 bg-gradient-to-br from-[#2f91fa] via-[#277ee8] to-[#1449b3] relative"/>
        <Navbar styling={'scale-100 absolute z-50 top-2 left-1/2 -translate-x-1/2'}/>
        <MainSection styling={'scale-100 absolute z-40 top-24 left-1/2 -translate-x-1/2'} />
        <SecondSection/>
        <InsightsResourcesScreen/>
        <Footer/>
    </div>
  )
}

export default App