import React from "react"
import logo_black from "../assets/logo_black.png"
export const Loading = () => {
    return <div className="w-full h-screen grid place-items-center">
        <img className="w-[450px] h-[300px]" src={logo_black} alt="" />
    </div>
}

export const Suspense = ({children}) => {
    return <React.Suspense fallback={<Loading/>}>{children}</React.Suspense>
}
