import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Heading from "../../Shared/Heading";


const Myclass = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [students,setStudents] = useState([])

  const email = user?.email;
  useEffect(() => {
    document.title = "My Class"; // Update the title here
  }, []);
  useEffect(() => {
    fetch(`https://assignment12-blue.vercel.app/class/${email}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [email]);

  useEffect(()=>{
    fetch('https://assignment12-blue.vercel.app/students')
    .then(res=>res.json())
    .then(result => setStudents(result))
  },[])
  console.log(students)

  return (
    <div>
      <Heading des={'My Classes'}></Heading>
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
              <th>Price</th>
              <th>Status</th>
              <th>Sits</th>
              <th>Update</th>
              <th>Admin FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {data.map((info, index) => (
              <tr key={info._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={info.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{info.className}</div>
                    </div>
                  </div>
                </td>
                <td>{info.price} $</td>
                <td>{info.status}</td>
                <td>{info.availableSeats}</td>
               <td> <Link to='/dashboard/update' state={info}> <button className="btn btn-secondary btn-xs">Update</button> </Link></td>
                <th>{info?.feedback}</th> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Heading des={'Total Enrolled Students'}></Heading>
      <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
          
              </th>
              <th>Students</th>
              <th>ClassName</th>
            </tr>
          </thead>
          <tbody>
            {students.map((info, index) => (
              <tr key={info._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                {info.student}
                </td>
              
                <td>{info.className}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Myclass;
