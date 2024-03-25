import React from 'react'
import Link from 'next/link'
import { MdOutlineAddHome } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdOutlineBookmarks } from "react-icons/md";
import { LiaPrescriptionBottleAltSolid } from "react-icons/lia";

function Sidebar() {
  const links=[
    {
        path:'/',
        name:'Home',
        icon:<MdOutlineAddHome className="h-6 w-6"/>,
    },
    {
        path:'https://healcare-videochat.vercel.app/',
        name:'Video',
        icon:<MdOutlineVideoCall className="h-6 w-6"/>,
    },  
    {
        path:'/schedule',
        name:'Scheduler',
        icon:<MdOutlineBookmarks className="h-6 w-6"/>
    },
    {
        path:'/prescription',
        name:'Prescription',
        icon:<LiaPrescriptionBottleAltSolid className="h-6 w-6"/>
    }
  ]
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col border-t-2 p-2 gap-2">
              {
                  links.map((link,index)=>
                  <div key={index}>
                    <Link href={link.path} className="flex items-center gap-2 bg-teal-500 rounded-md text-white font-semibold"><span className="p-3">{link.icon}</span>
                    <span>{link.name}</span></Link>
                  </div>)
              }
        </div>
        <div className="mb-14 bg-teal-500 text-center text-white rounded-md font-semibold p-2 m-2">
          <p>Logout</p>
        </div>
      </div>
  )
}

export default Sidebar