import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  const {_id, className, classImage, price, availableSeats } = location.state;
  const [name, setName] = useState(className);
  const [image, setImage] = useState(classImage);
  const [cost, setCost] = useState(price);
  const [seats, setSeats] = useState(availableSeats);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      image,
      cost,
      seats,
    };
console.log(formData)

fetch(`http://localhost:5000/class/${_id}`,{
    method:"PUT",
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(formData)
})
.then(res => res.json())
.then(result => console.log(result))
    // Pass the form data to the handleSubmit function in the parent component

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-[600px] flex flex-col justify-center p-8 bg-white shadow rounded" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image:
          </label>
          <input
            type="text"
            id="image"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700">
            Cost:
          </label>
          <input
            type="text"
            id="cost"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seats" className="block text-sm font-medium text-gray-700">
            Available Seats:
          </label>
          <input
            type="text"
            id="seats"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
