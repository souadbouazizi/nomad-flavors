// src/components/Card/PaymentForm.js
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Ne rien faire si Stripe n'est pas encore chargé
    }

    const cardElement = elements.getElement(CardElement);

    // Vous pouvez faire ici votre logique pour traiter le paiement
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod created:', paymentMethod);
      // Ici, vous pouvez gérer la suite, comme envoyer le paiement à votre serveur
      alert('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 mt-4"
      >
        Pay ${totalAmount.toFixed(2)}
      </button>
    </form>
  );
};

export default PaymentForm;
