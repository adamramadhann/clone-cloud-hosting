import React from 'react'
import Footer from './screen/Footer'
import InsightsResourcesScreen from './screen/InsightsResourcesScreen'
import Navbar from './components/navbar/Navbar'
import MainSection from './screen/angga/MainSection'


const App = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full overflow-x-hidden ' >
      <div className="w-dvw h-[850px] rounded-b-[25%] pt-[80px] px-72 aspect-square scale-125 -translate-x-3 bg-gradient-to-br from-[#2f91fa] via-[#277ee8] to-[#1449b3]">
        <Navbar styling={'scale-75'}/>
        <MainSection/>
      </div>
        <InsightsResourcesScreen/>
        <Footer/>
    </div>
  )
}

export default App