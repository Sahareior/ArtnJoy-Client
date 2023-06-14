import { useEffect, useState } from "react";

const Instructor = () => {
    const [data,setData] = useState([])
    const token = localStorage.getItem('access-token');
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/users', {
            
            headers: {
              Authorization: `Bearer ${token}` // Replace `accessToken` with your actual token variable
            }
          });
    
          if (response.ok) {
            const result = await response.json();
            setData(result);
          } else {
            // Handle error response
            console.log('Error:', response.status);
          }
        } catch (error) {
          // Handle fetch error
          console.log('Fetch Error:', error);
        }
      };
    
      fetchData();
    }, [token]);
    
  const instructor = data.filter(item => item?.instructor === "yes")
  console.log(instructor)
    return (
        <div className="p-52">
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
    
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        instructor.map((info,index)=>   <tr key={index+1}>
            <th>
              <label>
                <h1>{index+1}</h1>
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