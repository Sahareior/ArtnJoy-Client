import useAuth from "../../hooks/useAuth";


const Banner = ({info}) => {
    const{user} = useAuth()
    const userEmail = user?.email
    console.log(userEmail)
    const data = {userEmail,info}
 const handleClick =(info)=>{
if(user){
    fetch('http://localhost:5000/cart',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => console.log(result))
}
 }
    return (
        <div className="w-full relative h-[720px]" style={{backgroundImage: `url(${info.img})`,backgroundRepeat:"no-repeat"}}>
           <div className="absolute right-0 flex flex-col  justify-center items-center top-28" >
            <h1 className="text-5xl font-bold"> {info.subject}</h1>
            <h1 className="text-xl">instructor: {info.name}</h1>
            <h1 className="text-xl">Available seats: {info.students}</h1>
            <h1 className="text-xl">Price: {info.price}</h1>
            <button onClick={()=>handleClick(info)} className="btn btn-secondary">Select</button>

           </div>
        </div>
        
    );
};

export default Banner;