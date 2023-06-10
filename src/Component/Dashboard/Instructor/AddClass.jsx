import { useForm } from 'react-hook-form';
import Heading from '../../Shared/Heading';
import useAuth from '../../hooks/useAuth';

const AddClass = () => {
  const { register, handleSubmit,reset } = useForm();
  const {user} = useAuth()
  

  const onSubmit = (data) => {
    const { className, classImage, availableSeats, price } = data;
    const email = user.email 
    const name = user?.name || "anonymous" 

    // Create a new class object with the form values
    const newClass = {
      className,
      classImage,
      availableSeats,
      price,
      email,
      name,
      status: 'pending',
    };
    fetch('http://localhost:5000/class',{
        method: "POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newClass)
    })
    .then(res=> res.json())
    .then(result => console.log(result))

   console.log(newClass)
   reset()
  };

  return (
<div>
    <Heading title={"Here you can add your Classes"} des={"Add a class"}></Heading>
<form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mt-11 bg-base-200 mx-auto">
        <div className='flex gap-5 p-12'>
      <div className="mb-4">
        <label htmlFor="className" className="block font-medium text-gray-700">
          Class Name
        </label>
        <input
          type="text"
          id="className"
          {...register('className')}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="classImage" className="block font-medium text-gray-700">
          Class Image
        </label>
        <input
          type="text"
          id="classImage"
          {...register('classImage')}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      </div>
{/* ............................. */}
<div className='flex gap-6 p-12'>
      <div className="mb-4">
        <label htmlFor="availableSeats" className="block font-medium text-gray-700">
          Available Seats
        </label>
        <input
          type="number"
          id="availableSeats"
          {...register('availableSeats')}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          {...register('price')}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium ml-52 text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
      >
        Add
      </button>
    </form>
</div>
 
  );
};

export default AddClass;
