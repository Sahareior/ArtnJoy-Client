import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../Shared/Heading";
import useAuth from "../../hooks/useAuth";


const PaymentHistory = () => {
    const {user} = useAuth()
    console.log(user.email)
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/payment/${user.email}`)
        .then(res=> res.json())
        .then(result=>setData(result))
    },[user.email])
    console.log(data)
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