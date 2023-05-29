import Image from 'next/image'
import React from 'react'

const Background = () => {
  return (
    
      <Image  
        src="https://wallpaperaccess.com/full/11801.jpg"
        fill
        alt = "background"
        className="-z-50 opacity-30 object-cover"
      />
  
  )
}

export default Background