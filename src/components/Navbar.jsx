"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [open,setOpen]=useState(false);
  const Menu=()=>{
    setOpen(prev=>!prev)
  }
  return (
    <div className="flex items-center h-12 justify-between p-2">
        <div>
           <Link className="font-bold text-teal-600" href="/">HC</Link>
        </div>
        <div className="flex items-center gap-3">
           <Image src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg" height="35" alt="" width="35" className="rounded-full"/>
           <FiMenu className="w-7 h-7 text-teal-600 hidden sm:block lg:hidden" onClick={Menu}/>
           {
              open&&
              <div className="absolute">
                <div className="relative h-10 w-10 bg-red-100 top-12">

                </div>
              </div>
           }
        </div>
    </div>
  )
}

export default Navbar