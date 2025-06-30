
import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import './PaymentForm.css';

export default function PaymentForm({ onBack, onPaymentSuccess  }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: card,
    });

   if (error) {
  setMessage(`${error.message} (Hint: use 4242 4242 4242 4242 for test)`); 
} else {
  console.log("✅ PaymentMethod created:", paymentMethod);
  setMessage("✅ Payment successful!");

  setTimeout(() => {
        onPaymentSuccess();  // Call to App.js to change page
      }, 2000);
    
}

    setLoading(false);
  };

  return (
    <div className="payment-container">
      <button className="back-button" onClick={onBack}>← Back</button>

      <form onSubmit={handleSubmit} className="payment-form">
        <h2>💳 Secure Payment</h2>
        <CardElement className="card-element" />
        <button className="pay-button" type="submit" disabled={!stripe || loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
        {message && <div className="payment-message">{message}</div>}
      </form>
    </div>
  );
}
