import React from 'react'
import Card1 from '../../components/angga/section2/Card1'
import Card2 from '../../components/angga/section2/Card2'
import LayoutScreen from '../../components/LayoutScreen'

const SecondSection = () => {
  return (
    <LayoutScreen>
      <div className="flex flex-col items-center gap-[75px] mt-52">
        <Card1/>
        <Card2/>
      </div>
    </LayoutScreen>
  )
}

export default SecondSection
