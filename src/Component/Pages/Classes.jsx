import { useEffect, useState } from "react";
import Banner from "../Shared/Banner/Banner";

const Classes = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=> res.json())
        .then(result => setData(result))
    },[])
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/04/services_hero.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">WellCome to Your Class</p>

                    </div>
                </div>
            </div>
            {
                data.map((info,index) => <Banner key={index} info={info}></Banner>)
            }
        </div>
    );
};

export default Classes;
