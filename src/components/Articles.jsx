"use client"
import { useRouter } from "next/navigation";
import Link from "next/link"
import Image from 'next/image'

function Articles() {
    const router=useRouter();
    const Articles=()=>{
        router.push("/articles")
    }
  return (
    <div className="grid grid-cols-1 sm:flex sm:justify-center p-3 gap-5 sm:gap-12 items-center pt-6 border-t-2 pb-6">
        <div className="sm:w-80">
          <h1 className="text-2xl font-bold mb-3">Read top articles from health experts</h1>
          <p className="text-sm font-semibold text-slate-500 mb-3">Health articles that keep you informed about good health practices and achieve your goals.</p>
          <button onClick={()=>Articles()} className="px-5 py-3 rounded-md text-sm font-semibold bg-sky-500 text-white">See all Articles</button>
        </div>
        <div className="sm:w-96 p-3 rounded-md" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <Image src="https://cdn-ciobl.nitrocdn.com/SELEEFhgGIZTLBYDDcxxtVcKvWWxFmUU/assets/images/optimized/rev-ec522ac/www.cutislaserclinics.com/wp-content/uploads/2020/01/Sunscreen.jpg" alt="" width={400} height={100}/>
            <div className="m-3">
              <Link href="https://www.thehealthsite.com/beauty/skin-care/are-you-applying-your-sunscreen-the-right-way-heres-how-to-use-it-correctly-875927/" className="mt-2 text-xl font-bold hover:text-gray-600">Are You Using Sunscreen Right Way?</Link> 
              <p className="text-sm text-gray-500">One of the best preventive measures in your skin care toolbox is SUNSCREEN. But, to make sure that the sunscreen dose ...</p>
            </div>
        </div>
    </div>
  )
}

export default Articles