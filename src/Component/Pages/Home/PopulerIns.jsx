

const PopulerIns = ({newArray}) => {
   console.log(newArray)
    return (
        <div  className="grid grid-cols-3  gap-y-28 gap-x-14 gap-5 mt-20">
           {
            newArray.map((data,index)=> <div key={index} className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-48" src={data.img} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">{data.specialty}</h2>
              <p>{data.name}</p>
              <p>Students : {data.students}</p>
              <div className="card-actions justify-end">
  
              </div>
            </div>
          </div> )
           }
        </div>
    );
};

export default PopulerIns;