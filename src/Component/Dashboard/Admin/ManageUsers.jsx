import React, { useEffect } from 'react';
import useUsers from "../../hooks/useUsers";

const ManageUsers = () => {
  const [users, loading, refetch] = useUsers();

  const makeAdmin = async (id) => {
    const data = { role: "admin" };

    try {
      await fetch(`http://localhost:5000/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      console.log("Admin role updated successfully");
      refetch();
    } catch (error) {
      console.log("Error updating admin role:", error);
    }
  };

  const removeAdmin = async (id) => {
    const data = { role: "none" };

    try {
      await fetch(`http://localhost:5000/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      console.log("Admin role removed successfully");
      refetch();
    } catch (error) {
      console.log("Error removing admin role:", error);
    }
  };

  const makeInstructor = async (id, isIns) => {
    const data = { instructor: isIns };

    try {
      await fetch(`http://localhost:5000/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      console.log("Instructor role updated successfully");
      refetch();
    } catch (error) {
      console.log("Error updating instructor role:", error);
    }
  };

  const removeInstructor = async (id, isIns) => {
    const data = { instructor: isIns };

    try {
      await fetch(`http://localhost:5000/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      console.log("Instructor role removed successfully");
      refetch();
    } catch (error) {
      console.log("Error removing instructor role:", error);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
                <th>Instructor</th>
              </tr>
            </thead>
            <tbody>
              {users.map(data => (
                <tr key={data._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{data.email}</td>
                  <td>{data.role === "admin" ? "Yes" : "No"}</td>
                  <td>{data.instructor === "yes" ? "Yes" : "No"}</td>
                  <td>
                    {data.role === 'admin' ? (
                      <button onClick={() => removeAdmin(data._id, "admin")} className="btn btn-secondary btn-xs">Remove Admin</button>
                    ) : (
                      <button onClick={() => makeAdmin(data._id)} className="btn btn-secondary btn-xs">Make Admin</button>
                    )}
                  </td>
                  <td>
                    {data.instructor === "yes" ? (
                      <button onClick={() => removeInstructor(data._id, "no")} className="btn btn-success btn-xs">Remove Instructor</button>
                    ) : (
                      <button onClick={() => makeInstructor(data._id, "yes")} className="btn btn-success btn-xs">Make Instructor</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
