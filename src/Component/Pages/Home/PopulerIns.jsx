

const PopulerIns = ({newArray}) => {
   console.log(newArray)
    return (
        <div  className="grid grid-cols-3 gap-6 mt-20">
           {
            newArray.map((data,index)=> <div key={index} className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-48" src={data.img} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">{data.specialty}</h2>
              <p>{data.name}</p>
              <p>Students : {data.students}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div> )
           }
        </div>
    );
};

export default PopulerIns;