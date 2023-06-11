import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const {user} = useAuth()
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const totalPrice = 40
  useEffect(() => {
    if (totalPrice > 0) {
      // Create PaymentIntent when totalPrice is calculated
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalPrice }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.log(error);
        //   setPaymentError("Error occurred while creating PaymentIntent");
        });
    }
  }, [totalPrice]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Make API call to complete the payment process
    }
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: cardElement,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md my-[150px] mx-auto">
      <div className="mb-4">
        <label htmlFor="card-details" className="block mb-2 font-semibold text-gray-700">
          Card details
        </label>
        <CardElement options={{ style: { base: { fontSize: '16px' } } }} className="p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" disabled={!stripe} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
