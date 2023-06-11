import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading";
import PopulerIns from "./PopulerIns";


const PopulerClasses = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('ins.json')
        .then(res=> res.json())
        .then(result=>setData(result))
    },[])
console.log("data",data)
    
    let sortedArray =data?.sort(function (a, b) {  return b.students - a.students;  });
    console.log(sortedArray)
    return (
        <div className="mt-20">
            <Heading title={"Populer Classes"} des={"Here is our populer Classes"}></Heading>
            <div className="grid grid-cols-3 mt-14 gap-y-28 gap-x-14 gap-5">
                {
                    data.map((info,index) => 
                        <div key={index} className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-48" src={info.img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{info.subject}</h2>
    <p><span className="text-yellow-500">Instructor name:</span> {info.name}</p>
    <p>Students Attending: {info.students}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
                        )
                }
            </div>
           <div className="mt-10">
           <Heading title={"Populer Ins"} des={"Heres is Our Populer Instructor"}></Heading>
           <div>
            <PopulerIns newArray ={sortedArray}></PopulerIns>
           </div>
           </div>
        </div>
    );
};

export default PopulerClasses;