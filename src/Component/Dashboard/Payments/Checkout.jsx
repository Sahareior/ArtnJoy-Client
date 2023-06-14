import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import Heading from "../../Shared/Heading";


// TODO: provide publishable Key
const stripePromise = loadStripe('pk_test_51NEo1rESJveeRr2DRFKq0XzIa2eifSCJs6W06pC6wuxvgD5broJOhbKrfcQz2Bf2wKcDxMoWPkjcOoIp2Ww6CKN600EeeBgjdQ');
const Checkout = () => {
    const location = useLocation()
   console.log(location.state.total)
//  }
const total = location.state.total
const info = location.state.info
const id = location.state.id
console.log(id)
    
    return (
        <div className="mt-20 p-11">
           
         <Heading des={'Payment'}></Heading>
            <Elements stripe={stripePromise}>
                <CheckoutForm total={total} info={info} id={id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Checkout;
