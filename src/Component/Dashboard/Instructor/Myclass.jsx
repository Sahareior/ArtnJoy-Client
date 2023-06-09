import { useEffect, useState } from "react";

const Myclass = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/class/mama@mami2.com")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
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
              <th>Status</th>
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
                <th>{info.feedback}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myclass;
