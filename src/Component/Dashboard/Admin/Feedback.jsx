import { useLocation } from "react-router-dom";


const Feedback = () => {
    const location = useLocation()
    console.log(location.state.id)
    return (
        <div>
            <form className="flex flex-col gap-5 justify-center  w-full items-center"> 
           {/* lg */}
<textarea placeholder="Send your feedback" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <button className="btn btn-primary"><input type="submit" /></button>
            </form>
        </div>
    );
};

export default Feedback;