import React from 'react'
import vedioMain from "../../assets/mainVedio.mp4"
import logo from "../../assets/logo_white.png"
const Header = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={vedioMain} type="video/mp4" />
        Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
      </video>

      {/* Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/55 backdrop-blur-[1px]"></div>

      <div className="absolute z-10 w-[600px] flex justify-center">
        <img src={logo} alt="something" className="h-[350px]" />
      </div>
    </div>

  )
}

export default Header