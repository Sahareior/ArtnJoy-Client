import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClasses = () => {
   const {user} = useAuth()
    const [exists, setExists] = useState({})
    const email = user?.email

    const {data: cart= [], isLoading: loading, refetch} = useQuery({
      queryKey: ['users',email],
      queryFn: async() => {
          const res = await fetch(`http://localhost:5000/cart/${email}`);
          return res.json();
      }
  })
console.log(cart)
    let total = 0 ;
    for(const price of cart){
      const newPrice = parseFloat(price.info?.price);
      total = total + newPrice;
    }
    console.log(total)

   const handleDelete = (id) => {
    fetch(`http://localhost:5000/cart/id/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(result => {
       
Swal.fire({
  position: 'top-end',
  icon: 'center',
  title: 'Deleted Sucessfully',
  showConfirmButton: false,
  timer: 1500
})
      console.log(result)
      refetch()
    });
   }

   const findData = (id) => {
    const isExists = cart.find(d => d.id === id)
    if(isExists){
      setExists(isExists)
    }
   }
  
    return (
       <div className="mt-20">
        <Heading title={'Your Cart'}></Heading>
        <div>
          <h1 className="mt-20">Your total price : {total}</h1>
          <h1>Total items {cart.length}</h1>
        </div>
        <div className="grid grid-cols-2 mt-9 gap-8">
          {
            cart.map(info => (
              <div key={info._id} className="card card-compact w-52 bg-base-100 shadow-xl">
                <figure><img className="w-full h-52" src={info?.info?.classImage} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{info.info.subject}</h2>
                  <h2>Instructor: {info.info.name}</h2>
                  <p>{info.info.price}</p>
                  <div className="flex justify-between">
                    <button onClick={() => handleDelete(info._id)} className="btn btn-xs btn-warning">Delete</button>
                    <Link to="/checkout" state={{ total: total, info: info, id:info._id }}>
                      <button onClick={() => findData(info._id)} className="btn btn-xs btn-secondary">
                        Enroll Now!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
       </div>
    );
};

export default SelectedClasses;
