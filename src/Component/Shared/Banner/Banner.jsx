import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";

const Banner = ({ info }) => {
  const { user } = useAuth();
  const [users, loading, refetch] = useUsers();
  console.log(users);
  const isExists = users.filter((find) => find.email === user?.email);
//   console.log(isExists[0].role);

  const userEmail = user?.email;
  console.log(info.availableSeats);
  const data = { userEmail, info };
  const handleClick = (info) => {
    if (user) {
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    }
  };

  const isAdmin = isExists[0]?.role === "admin";
  const isInstructor = isExists[0]?.instructor === "yes";
  const isButtonDisabled = isAdmin || isInstructor || info.availableSeats === 0;

  return (
    <div
      className="w-full relative h-[720px]"
      style={{ backgroundImage: `url(${info.classImage})`, backgroundRepeat: "no-repeat" }}
    >
      <div className="absolute right-0 flex flex-col gap-4 justify-center items-center top-28">
        <h1 className="text-5xl font-bold"> {info.subject}</h1>
        <h1 className="text-xl">instructor: {info.name}</h1>
        <h1 className="text-xl">Available seats: {info.students}</h1>
        <h1 className="text-xl">Price: {info.price}</h1>
        <button onClick={() => handleClick(info)} className="btn btn-secondary" disabled={isButtonDisabled}>
          Select
        </button>
      </div>
    </div>
  );
};

export default Banner;
