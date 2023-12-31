import { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const Feedback = () => {
    const [error,setError] = useState('')
    const location = useLocation()
    // console.log(location.state.id)
    const id =location.state.id 
    const handleSubmit = (e)=>{
         e.preventDefault()
        const data = e.target.feedback.value 
        console.log(data)
        if(data.length>8){
            fetch(`https://assignment12-blue.vercel.app/class/${id}`,{
                method:'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify({data})
            })
            .then(res=> res.json())
            .then(result =>{
                 
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Thanks',
    showConfirmButton: false,
    timer: 1500
  })
                console.log(result)
                setError('')
                e.target.feedback.value =" "
                
            })
        }
        else{
            setError('Please give us a bigger feedback more then 10 words!!')
        }
    }
    return (
        <div>
                    <p>{error}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center mt-6 w-full items-center"> 
           {/* lg */}
<textarea placeholder="Send your feedback" name="feedback" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <button className="btn btn-primary"><input type="submit" /></button>
            </form>
    
        </div>
    );
};

export default Feedback;