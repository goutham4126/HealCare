import Image from 'next/image'
import React from 'react'
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex items-center h-12 justify-between p-2">
        <div>
           <h1 className="font-bold text-blue-900">HC</h1>
        </div>
        <div className="flex items-center gap-3">
           <Image src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg" height="35" width="35" className="rounded-full"/>
           <FiMenu className="w-7 h-7 text-blue-900 lg:hidden"/>
        </div>
    </div>
  )
}

export default Navbar