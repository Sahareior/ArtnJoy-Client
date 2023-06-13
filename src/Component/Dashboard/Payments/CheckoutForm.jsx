import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({info,total,id}) => {
  // const {_id,info} = cart
  const [clientSecret, setClientSecret] = useState("");
  const {user} = useAuth()
  const stripe = useStripe();
  const elements = useElements();
console .log(info.info.email)
 const instructorEmail = info?.info?.email
 const className = info?.info?.className


  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice:total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);
  console.log(clientSecret)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
console.log('card',card)
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
              },
          },
      },
  );

console.log(paymentIntent.status)
if (paymentIntent.status === 'succeeded'){
  const students = {
    student:0,
    instructor: instructorEmail,
    className: className
  }
  const payment = {
    email: user?.email,
    transactionId: paymentIntent.id,
    total,
    date: new Date(),
    info,
    product_id : id,
    
    
  }
  fetch('http://localhost:5000/payment',{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(payment) 
  })
  .then(res => res.json())
  .then(result => {
    console.log(result)
    fetch('http://localhost:5000/students',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(students)
    })
    .then(res=> res.json())
    .then(result => {
      console.log(result)
      fetch(`http://localhost:5000/students/${className}`,{
        method:'PATCH'
       
      })
      .then(res=> res.json())
      .then(result => console.log(result))
    })
  })

  
}

  };

  

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#4B5563',
        '::placeholder': {
          color: '#9CA3AF',
        },
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <CardElement className="p-2 border border-gray-300 rounded" options={cardElementOptions} />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50 disabled:pointer-events-none"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
