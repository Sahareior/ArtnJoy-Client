import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const SelectedClasses = () => {
   const {user} = useAuth()
    // const [cart, setCart] = useState([])
    const email = user?.email

    const {data: cart= [], isLoading: loading, refetch} = useQuery({
      queryKey: ['users',email],
      queryFn: async() => {
          const res = await fetch(`http://localhost:5000/cart/${email}`);
          return res.json();
      }
  })

 


    let total = 0 ;
    for(const price of cart){
    const newPrice = parseFloat(price.info?.price?.slice(1))

     total = total + newPrice
    }
   const handleDelete =(id)=>{
    fetch(`http://localhost:5000/cart/id/${id}`,{
      method:"DELETE"
    })
    .then(res=> res.json())
    .then(result => {
      console.log(result)
      refetch()
    })
   }
   
  
    return (
       <div className="mt-20">
        <Heading title={'Your Cart'}></Heading>
        <h1 className="mt-20">Your total price : {total}</h1>
        <h1>Total items {cart.length}</h1>
        <div className="grid grid-cols-4 gap-6 p-20">
           {
            cart.map(info => 
                <div key={info._id} className="card card-compact w-52 bg-base-100 shadow-xl">
  <figure><img className="w-full h-52" src={info?.info?.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{info.info.subject}</h2>
    <h2>Instructor: {info.info.name}</h2>
    <p>{info.info.price}</p>
    <div className=" flex justify-between">
      <button className="btn btn-xs btn-primary">Buy Now</button>
      <button onClick={()=>handleDelete(info._id)} className="btn btn-xs btn-warning">Delete</button>
      <button  className="btn btn-xs btn-warning">Buy</button>
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