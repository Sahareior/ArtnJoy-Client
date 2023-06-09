import { useEffect, useState } from "react";

const Instructor = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(result =>setData(result))
    },[])
  
    return (
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
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        data.map((info,index)=>   <tr key={index+1}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{info.name}</div>
                  
                </div>
              </div>
            </td>
            <td>
              {info.email}
          
            </td>
        
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>)
    }
      {/* row 2 */}

    </tbody>
    {/* foot */}


    
  </table>
</div>
        </div>
    );
};

export default Instructor;