import React from 'react'
import Footer from './screen/Footer'
import InsightsResourcesScreen from './screen/InsightsResourcesScreen'
import Navbar from './components/navbar/Navbar'
import MainSection from './screen/angga/MainSection'


const App = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full overflow-x-hidden ' >
      <div className="w-svw h-[850px] rounded-b-[45%] pt-[95px] aspect-square scale-150 -translate-x-3 bg-gradient-to-br from-[#2f91fa] via-[#277ee8] to-[#1449b3] relative"/>
        <Navbar styling={'scale-100 absolute z-50 top-2'}/>
        <MainSection/>

        <InsightsResourcesScreen/>
        <Footer/>
    </div>
  )
}

export default App