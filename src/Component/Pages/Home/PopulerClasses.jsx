import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading";
import PopulerIns from "./PopulerIns";
import axios from "axios";


const PopulerClasses = () => {
    const [data, setData] = useState([])
    const [ins,setIns] = useState([])

 useEffect(() => {
  axios.get('https://assignment12-blue.vercel.app/classes')
    .then((response) => setData(response.data))
    .catch((error) => console.error(error));
}, []);

useEffect(() => {
  axios.get('https://assignment12-blue.vercel.app/instructor')
    .then((response) => setIns(response.data))
    .catch((error) => console.error(error));
}, []);

    
    let sortedArray =ins?.sort(function (a, b) {  return b.students - a.students;  });

    return (
        <div className="mt-20">
           <div className="mr-[700px] md:mr-0"> <Heading title={"Populer Classes"} des={"Here is our populer Classes"}></Heading></div>
            <div className="grid md:grid-cols-3 mt-14 gap-y-28 gap-x-14 gap-5">
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
           <div className="mt-10 mr-[700px] md:mr-0">
           <Heading title={"Populer Ins"} des={"Heres is Our Populer Instructor"}></Heading>
           <div>
            <PopulerIns newArray ={sortedArray}></PopulerIns>
           </div>
           </div>
        </div>
    );
};

export default PopulerClasses;