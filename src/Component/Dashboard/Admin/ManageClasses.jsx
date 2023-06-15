import { useQuery, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const res = await fetch("https://assignment12-blue.vercel.app/class");
      return res.json();
    },
  });

  useEffect(() => {
    document.title = "ManageClass"; // Update the title here
  }, []);

  const { mutate: updateClassStatus } = useMutation(
    async ({ id, data }) => {
      const res = await fetch(`https://assignment12-blue.vercel.app/class/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      return res.json();
    }
  );

  const handleApprove = (id) => {
    updateClassStatus({ id, data: "approved" })
      refetch();
    
  };

  const handleDeny = (id) => {
    updateClassStatus({ id, data: "denied" })
      refetch();

  };

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
              <th>Price</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((info, index) => (
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
                <td>{info.name} </td>
                <td>{info.email} </td>
                <td>{info.status}</td>
                <th>
                
                    <button
                      onClick={() => handleApprove(info._id)}
                      className="btn btn-ghost hover:btn-secondary btn-xs"
                    >
                      Approve
                    </button>
 
                </th>
                <th>
                  
                    <button
                      onClick={() => handleDeny(info._id)}
                      className="btn btn-ghost hover:btn-warning btn-xs"
                    >
                      Deny
                    </button>
              
                </th>
                <th>
                  <Link
                    to="/dashboard/feedback"
                    state={{ id: info._id }}
                  >
                    <button className="btn btn-ghost hover:btn-primary btn-xs">
                      Send Feedback
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
