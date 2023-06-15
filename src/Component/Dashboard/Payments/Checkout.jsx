import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Link, useLocation } from "react-router-dom";
import Heading from "../../Shared/Heading";
import { useEffect } from "react";


// TODO: provide publishable Key
const stripePromise = loadStripe('pk_test_51NEo1rESJveeRr2DRFKq0XzIa2eifSCJs6W06pC6wuxvgD5broJOhbKrfcQz2Bf2wKcDxMoWPkjcOoIp2Ww6CKN600EeeBgjdQ');
const Checkout = () => {
    const location = useLocation()
   console.log(location.state.total)
//  }
const total = location.state.total
const info = location.state.info
const id = location.state.id

useEffect(() => {
    document.title = "Payment"; // Update the title here
  }, []);
    
    return (
        <div className="mt-20 p-11">
           <Link to='/' className='mx-auto ml-0 mt-24'><button className='btn btn-secondary'>Go Back to Homepage</button></Link>
         <Heading des={'Payment'}></Heading>
            <Elements stripe={stripePromise}>
                <CheckoutForm total={total} info={info} id={id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Checkout;
