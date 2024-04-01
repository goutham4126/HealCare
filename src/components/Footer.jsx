import React from 'react'
import { HiHome } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
  return (
    <div className="flex justify-around items-center bg-white p-3 text-teal-500">
        <Link href="/"><HiHome className="h-6 w-6"/></Link>
        <Link href="https://200h323s3236cxkluds3455ukjxnj34467t4732-healcare-videochat.vercel.app/create"><FaVideo className="h-6 w-6"/></Link>
        <Link href="/schedule"><MdOutlineSchedule className="h-6 w-6"/></Link>
        <Link href="/prescription"><FaPrescriptionBottleMedical className="h-5 w-6"/></Link>
    </div>
  )
}

export default Footer