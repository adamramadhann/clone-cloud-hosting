// import React from 'react'
// import Navbar from './components/navbar/Navbar'
// import MainSection from './screen/angga/MainSection'
// import SecondSection from './screen/angga/SecondSection'
// import Footer from './screen/adam/Footer'
// import InsightsResourcesScreen from './screen/adam/InsightsResourcesScreen'


// const App = () => {
//   return (
//     <div className='bg-[#ffffff] flex flex-col justify-center items-center gap-12 w-full overflow-x-hidden ' >
//       <div className="w-svw h-[850px] rounded-b-[40%] pt-[95px] aspect-square scale-150 -translate-x-3 bg-gradient-to-br from-[#2f91fa] via-[#277ee8] to-[#1449b3] relative"/>
//         <Navbar styling={'scale-100 absolute z-50 top-2 left-1/2 -translate-x-1/2'}/>
//         <MainSection styling={'scale-100 absolute z-40 top-24 left-1/2 -translate-x-1/2'} />
//         <SecondSection/>
//         <InsightsResourcesScreen/>
//         <Footer/>
//     </div>
//   )
// }

// export default App


// responsive version
import React from 'react'
import Navbar from './components/navbar/Navbar'
import MainSection from './screen/angga/MainSection'
import SecondSection from './screen/angga/SecondSection'
import Footer from './screen/adam/Footer'
import InsightsResourcesScreen from './screen/adam/InsightsResourcesScreen'


const App = () => {
  return (
    <div className='bg-[#ffffff] flex flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-12 w-full overflow-x-hidden ' >
      <div className="w-screen h-[650px] sm:h-[750px] lg:h-[850px] rounded-b-[30%] sm:rounded-b-[35%] lg:rounded-b-[40%] pt-[75px] sm:pt-[85px] lg:pt-[95px] aspect-square scale-110 sm:scale-125 lg:scale-150 -translate-x-3 bg-gradient-to-br from-[#2f91fa] via-[#277ee8] to-[#1449b3] relative"/>
        <Navbar styling={'scale-100 absolute z-50 top-2 left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 lg:px-0'}/>
        <MainSection styling={'scale-100 absolute z-40 top-24 left-1/2 -translate-x-1/2 w-full'} />
        <div className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 xl:px-0 md:mt-96 sm:mt-96 max-sm:mt-[480px] lg:mt-12">
          <SecondSection />
        </div>
        <InsightsResourcesScreen />
        <Footer/>
    </div>
  )
}

export default App