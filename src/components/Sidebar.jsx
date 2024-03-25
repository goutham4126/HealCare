import React from 'react'
import Link from 'next/link'
function Sidebar() {
  const links=[
    {
        path:'/',
        name:'Home',
    },
    {
        path:'https://healcare-videochat.vercel.app/',
        name:'Video',
    },  
    {
        path:'/booking',
        name:'Booking',
    },
    {
        path:'/prescription',
        name:'Prescription',
    }
  ]
  return (
    <div className="flex flex-col border-t-2">
            {
                links.map((link,index)=>
                <div key={index}>
                    <Link href={link.path}>{link.name}</Link>
                </div>)
            }
    </div>
  )
}

export default Sidebar