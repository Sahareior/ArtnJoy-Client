import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";
import { Vortex } from "react-loader-spinner";

const Banner = ({ info }) => {
  const { user } = useAuth();
  const [users, loading, refetch] = useUsers();
  console.log(users);
  const isExists = Array.isArray(users) && users.filter((find) => find.email === user?.email);
  
//   console.log(isExists[0].role);
console.log(info)

  const userEmail = user?.email;
  console.log(info.availableSeats);
  const data = { userEmail, info };
  const handleClick = (info) => {
    if (user) {
      fetch("https://assignment12-blue.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Item added to cart',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(result)
        });
    }
  };

  if(loading){
    return  <Vortex
    visible={true}
    height="80"
    width="80"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
  }

  const isAdmin = isExists[0]?.role === "admin";
  const isInstructor = isExists[0]?.instructor === "yes";
  const isButtonDisabled = isAdmin || isInstructor || info.availableSeats === 0;

  return (
    <div className="card card-compact w-96 p-8 bg-base-100 shadow-xl">
    <figure><img src={info.classImage} alt="" /></figure>
    <div className="card-body">
      <h2 className="card-title">{info.className}</h2>
      <p>Instructor :{info.name}</p>
      <p>Available Seats: {info.availableSeats}</p>
      <p>Price: {info.price}</p>
      <div className="card-actions justify-end">
      <button onClick={() => handleClick(info)} className="btn btn-secondary" disabled={isButtonDisabled}>
            Select
          </button>
      </div>
    </div>
  </div>
  );
};

export default Banner;
