import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";

function Navbar() {
  // const [open,setOpen]=useState();
  return (
    <div className="flex items-center h-12 justify-between p-2">
        <div>
           <Link className="font-bold text-teal-600" href="/">HC</Link>
        </div>
        <div className="flex items-center gap-3">
           <Image src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg" height="35" alt="" width="35" className="rounded-full"/>
           <FiMenu className="w-7 h-7 text-teal-600 hidden sm:block lg:hidden"/>
        </div>
    </div>
  )
}

export default Navbar