import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading";

const SelectedClasses = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cart')
        .then(res=> res.json())
        .then(result => setData(result))
        
    },[])

    let total = 0 ;
    for(const price of data){
    const newPrice = parseFloat(price.info.price.slice(1))

     total = total + newPrice
    }
    console.log(total)
   
  
    return (
       <div className="mt-20">
        <Heading title={'Your Cart'}></Heading>
        <h1 className="mt-20">Your total price : {total}</h1>
        <h1>Total items {data.length}</h1>
        <div className="grid grid-cols-2 gap-6 p-20">
           {
            data.map(info => 
                <div key={info._id} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={info.info.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{info.info.subject}</h2>
    <h2>Instructor: {info.info.name}</h2>
    <p>{info.info.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                )
           }
        </div>
       </div>
    );
};

export default SelectedClasses;