import React from 'react'
import Footer from './screen/Footer'
import InsightRecources from './component/InsightRecources'
import InsightsResourcesScreen from './screen/InsightsResourcesScreen'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-ceter w-full  ' >
        <InsightsResourcesScreen/>
        <Footer/>
    </div>
  )
}

export default App