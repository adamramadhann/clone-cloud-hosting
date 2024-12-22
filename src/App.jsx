import React from 'react'
import Footer from './screen/Footer'
import InsightsResourcesScreen from './screen/InsightsResourcesScreen'
import Navbar from './components/navbar/Navbar'


const App = () => {
  return (
    <div className='flex flex-col justify-center items-ceter w-full ' >
      <div className="w-full bg-gradient">
        <Navbar/>
      </div>
        <InsightsResourcesScreen/>
        <Footer/>
    </div>
  )
}

export default App