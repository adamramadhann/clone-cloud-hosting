import React from 'react'

const LayoutScreen = ({children, className}) => {
  return (
    <div className={`max-w-[1200px] mx-auto ${className}`} >{children}</div>
  )
}

export default LayoutScreen