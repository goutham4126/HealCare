"use client"
import React from 'react'
import { HiHome } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import Link from 'next/link';
import { useSession } from 'next-auth/react';

function Footer() {
  const {data:session}=useSession();
  return (
    <div className="flex justify-around items-center bg-white p-3 text-teal-500">
        <Link href="/"><HiHome className="h-6 w-6"/></Link>
        <Link href={session?"https://200h323s3236cxkluds3455ukjxnj34467t4732-healcare-videochat.vercel.app/create":"/login"}><FaVideo className="h-6 w-6"/></Link>
        <Link href={session?"/schedule":"/login"}><MdOutlineSchedule className="h-6 w-6"/></Link>
        <Link href={session?"/prescription":"/login"}><FaPrescriptionBottleMedical className="h-5 w-6"/></Link>
    </div>
  )
}

export default Footer