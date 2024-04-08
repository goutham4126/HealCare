import { FaIndianRupeeSign } from "react-icons/fa6";
import {  FaAngleRight } from "react-icons/fa"
function Homepage() {

    const specialities=[
        {
            image:"https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg",
            disease:"Dermatology",
            cost:100,
            link:"consultation"
        },
        {
            image:"https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg",
            disease:"Dermatology",
            cost:100,
            link:"consultation"
        },
        {
            image:"https://www.practo.com/consult/static/images/top-speciality-gp.svg",
            disease:"Dermatology",
            cost:100,
            link:"consultation"
        },
        {
            image:"https://www.practo.com/consult/static/images/top-speciality-stomach.svg",
            disease:"Dermatology",
            cost:100,
            link:"consultation"
        },
        {
            image:"https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
            disease:"Dermatology",
            cost:100,
            link:"consultation"
        },
        {
            image:"https://www.practo.com/consult/static/images/top-speciality-kidney.svg",
            disease:"Dermatology",
            cost:100,
            link:"consultation"
        },
        {
            image:"https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
            disease:"Dermatology",
            cost:100,
            link:"consultation"
        },
        {
            image:"https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg",
            disease:"Dermatology",
            cost:100,
            link:"consultation"
        },
    ]
  return (
        <div className="mt-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 leading-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-600">25+ specialities</h1>
                    <p className="text-gray-500 text-sm">Consult top doctors across specialities</p>
                </div>
                <div>
                    <button className="border px-3 py-2 font-semibold text-sm rounded-lg mt-2">See all Specialities</button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-5 p-3">
                {
                    specialities.map((item,index)=>(
                        <div key={index} className="p-3 text-center rounded-lg" style={{boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                                <img src={item.image} alt="" className="rounded-full h-32 w-32 m-auto mb-4" />
                                <p className="font-semibold">{item.disease}</p>
                                <p className="text-neutral-600 font-semibold"><FaIndianRupeeSign className="inline h-3.5"/>{item.cost}</p>
                                <a href={item.link} className="text-cyan-500 font-semibold">Consult now < FaAngleRight className="inline h-4"/></a>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Homepage