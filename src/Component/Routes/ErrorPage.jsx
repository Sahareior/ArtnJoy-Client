import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div className="p-32">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg)`,
          }}
        >
          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <Link to='/'><button className="btn btn-primary">Back to Homepage</button></Link>
  
            
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;
  