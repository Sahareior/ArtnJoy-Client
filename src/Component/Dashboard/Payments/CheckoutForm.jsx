import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ info, total, id }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const time = new Date();
  console.log(info.info.email);
  const instructorEmail = info?.info?.email;
  const className = info?.info?.className;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://assignment12-blue.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice: total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);
  

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
    console.log('card', card);

    if (error) {
      console.log('[error]', error);
      setErrorMessage(error.message); // Set the error message
      return;
    }

    console.log('[PaymentMethod]', paymentMethod);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    console.log(paymentIntent.status);
    if (paymentIntent.status === 'succeeded') {
      const students = {
        student: 0,
        instructor: instructorEmail,
        className: className,
      };
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        total,
        date: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`,
        info,
        product_id: id,
      };
      fetch('https://assignment12-blue.vercel.app/payment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((result) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thanks',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result);
          fetch('https://assignment12-blue.vercel.app/students', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(students),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              fetch(`https://assignment12-blue.vercel.app/students/${className}`, {
                method: 'PATCH',
              })
                .then((res) => res.json())
                .then((result) => console.log(result));
            });
        });
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
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mb-7 mx-auto">
        <div className="mb-4">
          <CardElement className="p-2 border border-gray-300 rounded" options={cardElementOptions} />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Show the error message */}
        <button
          type="submit"
          disabled={!stripe}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50 disabled:pointer-events-none"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
