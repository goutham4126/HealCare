"use client"
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation';

function page() {
    const router=useRouter();
    const Move=()=>{
        router.push("/")
    }
  return (
        <div className="p-2 md:p-16 flex justify-center items-center min-h-screen">
            <div className="max-w-lg w-full">
                <div className="bg-gray-100 rounded-lg shadow-xl p-4">
                        <div className="flex justify-between items-center cursor-pointer text-gray-600 mb-3" onClick={Move}>
                            <h1 className="text-2xl font-medium leading-10">Consult with a Doctor</h1>
                            <RxCross2 className="text-red-600 h-6 w-6"/>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="symptom" className="block text-sm font-medium text-gray-700 mb-1">Symptom or Health Problem</label>
                                <input type="text" id="symptom" className="border-2 outline-none p-3 rounded-md w-full"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                <input type="tel" id="mobile" className="border-2 outline-none p-3 rounded-md w-full"/>
                                <p className="text-sm text-gray-400 mt-1">A verification code will be sent to this number.</p>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-300">Continue</button>
                        </form>
                </div>
            </div>
        </div>
  )
}

export default page


{/* <div className="md:flex md:flex-col justify-center bg-teal-500 hidden">
<img src="https://i.postimg.cc/KjLSMKNH/wepik-export-2024040815245907-Pn-removebg-preview.png" alt="" className="w-full h-72"/>
</div> */}