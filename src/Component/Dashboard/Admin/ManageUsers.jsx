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
        .then(result => console.log(result))
        refetch()
    }
    const makeInstructor =(id)=>{
        const data = { role: "instructor" };

        fetch(`http://localhost:5000/users/${id}`,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
        refetch()
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
        <td>{data.role? "yes":"no"}</td>
        <th>
          <td>{data.role ==="instructor"? "yes": "no"}</td>
        </th>
        <th>
          <button onClick={()=>makeAdmin(data._id)} className="btn btn-secondary btn-xs">Make an Admin</button>
        </th>
        <th>
          <button onClick={()=>makeInstructor(data._id)} className="btn btn-success btn-xs">Make an instructor</button>
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