"use client"
import React from 'react'
import Link from 'next/link'
import { signOut,useSession } from 'next-auth/react';
import { HiHome } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { useRouter} from 'next/navigation';

function Sidebar() {
  const {data:session}=useSession()
  const router=useRouter()
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' }); 
  };
  const handleSignin = () => {
     router.push("/login")
  };
  const pathname=usePathname();
  const links=[
    {
        path:'/',
        name:'Home',
        icon:<HiHome className="h-6 w-6"/>,
        isActive:pathname==="/"
    },
    {
        path:'https://200h323s3236cxkluds3455ukjxnj34467t4732-healcare-videochat.vercel.app/create',
        name:'Video',
        icon:<FaVideo className="h-6 w-6"/>,
        isActive:pathname==="https://200h323s3236cxkluds3455ukjxnj34467t4732-healcare-videochat.vercel.app/create"
    },  
    {
        path:'/schedule',
        name:'Scheduler',
        icon:<MdOutlineSchedule className="h-6 w-6"/>,
        isActive:pathname==="/schedule"
    },
    {
        path:'/prescription',
        name:'Prescription',
        icon:<FaPrescriptionBottleMedical className="h-6 w-6"/>,
        isActive:pathname==="/prescription"
    }
  ]
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col border-t-2 p-2 gap-2">
              {
                  links.map((link,index)=>
                  <div key={index}>
                    {
                      link.path==="/"?
                      <Link href={link.path} className={`${link.isActive?"text-teal-500 bg-white border-2 border-teal-500": "bg-teal-500 text-white"} flex items-center gap-2 rounded-md font-semibold`}><span className="p-3">{link.icon}</span>
                        <span>{link.name}</span>
                      </Link>:
                      <Link href={session?link.path:"/login"} className={`${link.isActive?"text-teal-500 bg-white border-2 border-teal-500": "bg-teal-500 text-white"} flex items-center gap-2 rounded-md font-semibold`}><span className="p-3">{link.icon}</span>
                        <span>{link.name}</span>
                      </Link>
                    }
                  </div>)
              }
        </div>

          {
            session?
            <div onClick={handleSignOut} className=" cursor-pointer mb-14 bg-teal-500 text-center text-white rounded-md font-semibold p-2 m-2">
              Logout
            </div>
            :<div onClick={handleSignin} className=" cursor-pointer mb-14 bg-teal-500 text-center text-white rounded-md font-semibold p-2 m-2">
              Login/Signin
            </div>
          }
      </div>
  )
}

export default Sidebar