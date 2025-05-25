import React from 'react'
import miniLogo from "../../assets/mini_logo.png"
import { NavLink } from 'react-router-dom'
import "./style.css"
import { useStateValue } from '@/context'
const Navbar = () => {
  const [ , dispatch] = useStateValue()

  const handleClick = (e) =>{
    if(e == "team" || e == "info"){

      dispatch({type:"changePage", payload:false})
    }else{
      dispatch({type:"changePage", payload:true})

    }
    
  }
  return (
  <nav className="bg-white p-6 sticky top-0 z-50">
    <div className="flex items-center justify-between" style={{ padding: "0 90px" }}>
      <NavLink className="flex items-center space-x-4" to="/" onClick={()=>handleClick("img")}>
        <img src={miniLogo} alt="Logo" className="h-17 w-auto" />
      </NavLink>

      <div className="flex items-center gap-10 text-gray-500 font-semibold text-[19px]">
          <NavLink to="/">
              <span className="cursor-pointer hover:text-gray-900 transition" onClick={()=>handleClick("portfolio")}>PORTFOLIO</span>
          </NavLink>
          <NavLink to="/team">
              <span className="cursor-pointer hover:text-gray-900 transition" onClick={()=>handleClick("team")}>TEAM</span>
          </NavLink>
          <NavLink to="/info">
              <span className="cursor-pointer hover:text-gray-900 transition" onClick={()=>handleClick("info")}>INFO</span>
          </NavLink>
      </div>
    </div>
  </nav>


  )
}

export default Navbar