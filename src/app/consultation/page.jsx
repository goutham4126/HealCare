"use client"
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation';

function page() {
    const router=useRouter();
    const Move=()=>{
        router.push("/")
    }
  return (
    <div className="h-[90vh] p-16">
        <div className="flex justify-center">
            <div className="flex justify-between h-96 w-full" style={{boxShadow:"0 26px 58px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18)"}}>
                <div className="p-3 pl-10">
                    <h1 className="text-2xl font-medium leading-10 mt-3">Consult with a Doctor</h1>
                    <p className="leading-6">Tell us your symptom or health problem</p>
                    <input type="text" className="border outline-none p-3 rounded-md w-full mt-2" placeholder="Eg:fever,headache.."/>
                    <p className="leading-10">Mobile number</p>
                    <input type="number" className="border outline-none p-3 rounded-md w-full"/>
                    <p className="text-sm text-gray-400 leading-10">A verification code will be sent to this number.</p>
                    <button className="border-2 p-2 mt-4 rounded-lg text-sm">Continue</button>
                </div>
                <div className="md:flex md:flex-col justify-center bg-teal-500 hidden">
                    <img src="https://i.postimg.cc/KjLSMKNH/wepik-export-2024040815245907-Pn-removebg-preview.png" alt="" className="w-full h-72"/>
                </div>
                <div className="absolute right-16 p-2 hidden md:block" onClick={Move}>
                    <RxCross2 className="relative h-6 w-6"/>
                </div>
            </div>
        </div> 
    </div>    
  )
}

export default page