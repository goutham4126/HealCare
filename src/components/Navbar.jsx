"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { HiHome } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { signOut,useSession } from 'next-auth/react';
import { usePathname,useRouter } from 'next/navigation';
import { HiLogin } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";


function Navbar() {
  const {data:session}=useSession()
  const [open,setOpen]=useState(false);
  const Menu=()=>{
    setOpen(prev=>!prev)
  }
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
    <div className="flex items-center h-12 justify-between p-2">
        <div>
           <Link className="font-bold text-teal-600" href="/">HC</Link>
        </div>
        <div className="flex items-center gap-2">
           {session&&<Image src={session?.user?.image} height="35" alt="" width="35" className="rounded-full"/>}
           <FiMenu className="w-7 h-7 text-teal-600 hidden sm:block lg:hidden" onClick={Menu}/>
           {
              open&&
              <div>
                  <div className="flex flex-col w-[200px] p-3 gap-2 font-bold absolute top-14 right-1 rounded-md bg-white text-teal-500 shadow-xl">
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
                      {
                        session?
                        <div onClick={handleSignOut} className="cursor-pointer bg-teal-500 text-center text-white rounded-md font-semibold p-2">
                          Logout
                        </div>
                        :<div onClick={handleSignin} className="cursor-pointer bg-teal-500 text-center text-white rounded-md font-semibold p-2">
                          Login/Signin
                        </div>
                      }
                  </div>
              </div>
           }
           <div className="sm:hidden">
                {
                  session?
                  <div onClick={handleSignOut} className="cursor-pointer text-teal-500 p-2">
                    <HiLogout />
                  </div>
                  :<div onClick={handleSignin} className=" cursor-pointer text-teal-500 p-2">
                    <HiLogin />
                  </div>
                }
           </div>
        </div>
    </div>
  )
}

export default Navbar
