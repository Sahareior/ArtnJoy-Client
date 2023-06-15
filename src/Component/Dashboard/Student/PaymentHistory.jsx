import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../Shared/Heading";
import useAuth from "../../hooks/useAuth";


const PaymentHistory = () => {
    const {user} = useAuth()
    console.log(user.email)
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://assignment12-blue.vercel.app/payment/${user.email}`)
        .then(res=> res.json())
        .then(result=>setData(result))
    },[user.email])
  
    useEffect(() => {
      document.title = "History"; // Update the title here
    }, []);
    return (
        <div>
            <Heading des={"All Payments"}></Heading>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>

        <th>Date</th>
        <th>Price</th>
        <th>Class</th>
        <th>transactionId</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
  {
    data.map((info,index) =>     <tr key={info._id}>
        <th>
          <label>
          <h1>{index+1}</h1>
          </label>
        </th>
     
        <td>
      {info.date}
        </td>
        <td>{info.total}</td>
        <th><td>{info.info.info.className}</td></th>
        <th>
          <td>{info.transactionId}</td>
        </th>
      </tr>)
  }
      {/* row 2 */}
   
    </tbody>
    {/* foot */}

    
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;