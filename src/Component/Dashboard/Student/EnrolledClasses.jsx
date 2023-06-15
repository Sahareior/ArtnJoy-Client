import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../Shared/Heading";
import useAuth from "../../hooks/useAuth";


const EnrolledClasses = () => {
    const {user} = useAuth()
  const [data,setData] = useState([])

  useEffect(() => {
    document.title = "EnrolledClasss"; // Update the title here
  }, []);

  useEffect(()=>{
    fetch(`https://assignment12-blue.vercel.app/payment/${user.email}`)
    .then(res => res.json())
    .then(result => setData(result))
  },[user.email])
 console.log(data)
    return (
        <div>
            <Heading des={"Enrolled Class"}></Heading>
            <div className="grid grid-cols-2 gap-6">
                {
                    // data.map(item => console.log(item.info.info.subject))
                    data.map(item => <div className="card w-96 bg-base-100 shadow-xl" key={item._id}>
                         <figure><img src={item?.info?.info?.classImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{item?.info?.info?.className}</h2>
                      <p>Instructor:  {item?.info?.info?.email}</p>
                    </div>
                   
                  </div>)
                }
            </div>
        </div>
    );
};

export default EnrolledClasses;