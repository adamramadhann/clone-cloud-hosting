import React from 'react'

const LayoutScreen = ({children, className}) => {
  return (
    <div className='max-w-[1400px] mx-auto'>{children}</div>
  )
}

export default LayoutScreen