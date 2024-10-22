import React, { useContext, useState } from 'react';
import { CartContext } from '../../components/Card/CartContext'; // Importer le contexte

function Checkout() {
  const { cartItems, totalAmount } = useContext(CartContext); // Récupérer les articles et le total du contexte
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentConfirmed(true);
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-20 ">
      <div className='bg-[rgba(255,255,255,.5)] p-5 rounded-lg shadow-lg'>
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Checkout</h1>
      
      {/* Total Section */}
      <div className="p-6 rounded-lg  flex justify-between items-center mb-8 text-white">
        <h2 className="text-xl font-semibold">Total:</h2>
        <span className="text-2xl font-bold text-orange-600">${totalAmount.toFixed(2)}</span>
      </div>

      {/* Cart Items */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Items in Cart:</h2>
        {cartItems.length > 0 ? (
          <ul className='text-white'>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.title}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Payment Method Selection */}
      <form onSubmit={handleSubmit} className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Select Payment Method:</h2>
        <div className="space-y-4 mb-6">
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="PayPal"
              onChange={handlePaymentChange}
              className="mr-2"
            />
            PayPal
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="Espèce"
              onChange={handlePaymentChange}
              className="mr-2"
            />
            Espèce
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="Chèque"
              onChange={handlePaymentChange}
              className="mr-2"
            />
            Chèque
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="Bon de commande"
              onChange={handlePaymentChange}
              className="mr-2"
            />
            Bon de commande
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
        >
          Confirm Payment
        </button>
      </form>

      {/* Payment Confirmation */}
      {paymentConfirmed && (
        <div className="bg-orange-200 p-4 rounded-lg mt-4 ">
          <h3 className="text-lg font-semibold">Payment Confirmed!</h3>
          <p>Payment Method: {paymentMethod}</p>
          <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          <p>Thank you for your purchase!</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Checkout;
