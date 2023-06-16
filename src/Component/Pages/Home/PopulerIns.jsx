const PopulerIns = ({ newArray }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-28 gap-x-14 gap-5 mt-20">
      {newArray.map((data, index) => (
    <div key={index+1} className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={data.image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Students: {data.students}</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
  </div>
      ))}
    </div>
  );
};

export default PopulerIns;
