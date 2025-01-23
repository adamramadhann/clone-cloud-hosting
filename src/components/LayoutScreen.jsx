import React from 'react'

const LayoutScreen = ({children, className}) => {
  return (
    <div className='max-w-[1400px] p-5 sm:p-0 w-full mx-auto'>{children}</div>
  )
}

export default LayoutScreen