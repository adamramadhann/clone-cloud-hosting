import React from 'react'

const LayoutScreen = ({children, className}) => {
  return (
    <div className='max-w-[1400px] mx-auto flex flex-col items-center'>{children}</div>
  )
}

export default LayoutScreen