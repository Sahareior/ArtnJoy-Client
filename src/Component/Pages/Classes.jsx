import { useEffect, useState } from "react";
import Banner from "../Shared/Banner/Banner";

const Classes = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        document.title = "Classes"; // Update the title here
      }, []);

    useEffect(()=>{
        fetch('https://assignment12-blue.vercel.app/class')
        .then(res=> res.json())
        .then(result => setData(result))
    },[])
    return (
        <div className="">
            <div className="h-[568px] relative w-full" style={{backgroundImage: 'url(https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/04/services_hero.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
              <h1 className="absolute font-mono left-72 text-5xl text-yellow-400 top-52">Our Classes......</h1>
                <h1 className="absolute font-thin right-80 text-5xl text-white bottom-52" >Select your Favorite one!!</h1>
            </div>
           <div className="mt-14 grid grid-cols-3  gap-5">
           {
                data.map((info,index) => <Banner key={index} info={info}></Banner>)
            }
           </div>
        </div>
    );
};

export default Classes;
