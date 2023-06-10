import useUsers from "../../hooks/useUsers";


const ManageUsers = () => {
    const [users, loading, refetch] = useUsers()
    
    const makeAdmin =(id)=>{
        const data = { role: "admin" };

        fetch(`http://localhost:5000/users/${id}`,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result)
          refetch()
        } )
    }
    const removeAdmin =(id)=>{
        const data = { role: "none" };

        fetch(`http://localhost:5000/users/${id}`,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result)
          refetch()
        } )
    }
    const makeInstructor =(id,isIns)=>{
        const data = { instructor:isIns};
        console.log(data)

        fetch(`http://localhost:5000/users/${id}`,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result)
          refetch()
        } )
    }
    const removeInstructor =(id,isIns)=>{
        const data = { instructor:isIns};
        console.log(data)

        fetch(`http://localhost:5000/users/${id}`,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result)
          refetch()
        } )
    }
    return (
        <div>
            <h1>USers</h1>
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
        <th>Admin</th>
        <th>Instructot</th>
      </tr>
    </thead>
    <tbody>
   {
    users.map( data => <tr key={data._id}>
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
              <div className="font-bold">{data.name}</div>
        
            </div>
          </div>
        </td>
        <td>
          {data.email}
        </td>
        <td>{data.role === "admin"? "yes":"no"}</td>
        <th>
          <td>{data.instructor ==="yes"? "yes": "no"}</td>
        </th>
        <th>
        {data.role==='admin'?<div><button onClick={()=>removeAdmin(data._id,"admin")} className="btn btn-secondary btn-xs">Remove Admin </button></div>
      :
      <div><button onClick={()=>makeAdmin(data._id,)} className="btn btn-secondary btn-xs">MAke Admin</button></div>  
      }
          
        </th>
        <th>
         {
          data.instructor === "yes"? <div> <button onClick={()=>removeInstructor(data._id,"no")} className="btn btn-success btn-xs">Remove this instructor</button></div>
          :
          <div> <button onClick={()=>makeInstructor(data._id,"yes")} className="btn btn-success btn-xs">Make an instructor</button></div>
         }
        </th>
      </tr>)
   }
    </tbody>
    {/* foot */}

    
  </table>
</div>
        </div>
    );
};

export default ManageUsers;