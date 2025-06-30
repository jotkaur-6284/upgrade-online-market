

import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Home from './Components/Home';
import Buy from './Components/buy';
import Login from './Components/login';
import Signup from './Components/signup';
import Sell from './Components/Sell';
import ProductCatalog from './Components/ProductCatalog';
import AddCart from './Components/AddCart';
import ProductDetailsPage from './Components/ProductDetailsPage';
import OrderSummaryPage from './Components/OrderSummaryPage';
import PaymentForm from './Components/PaymentForm';

// 👇 Use your Stripe test key here
const stripePromise = loadStripe('pk_test_51RfYyGBV8V7fiquSleOCc3wMmSGxs9f8BCZOBm5P8sw4j12TYpBuV9ndH0PQ7EzoMc7iylT2graouKVsJvXBxU1Q00FO1Co7Y0');

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [loginMessage, setLoginMessage] = useState('');

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setLoginMessage('Login successful!');
    setCurrentPage('home');
    setTimeout(() => setLoginMessage(''), 2000);
  };

  const handleSignupSuccess = () => {
    alert('Signup successful! Please log in.');
    setCurrentPage('login');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <Elements stripe={stripePromise}>
      <>
        {currentPage === 'home' && (
          <Home
            user={user}
            onLoginClick={() => setCurrentPage('login')}
            onSignupClick={() => setCurrentPage('signup')}
            onBuyClick={() => setCurrentPage('buy')}
            onSellClick={() => setCurrentPage('sell')}
            onCatalogClick={() => setCurrentPage('catalog')}
            onLogoutClick={handleLogout}
            onCartClick={() => setCurrentPage('cart')}
          />
        )}

        {currentPage === 'login' && (
          <Login
            onLoginSuccess={handleLoginSuccess}
            loginMessage={loginMessage}
            onBack={() => setCurrentPage('home')}
          />
        )}

        {currentPage === 'signup' && (
          <Signup
            onSignupSuccess={handleSignupSuccess}
            onHomeClick={() => setCurrentPage('home')}
          />
        )}

        {currentPage === 'buy' && (
          <Buy
            user={user}
            onBack={() => setCurrentPage('home')}
            onDetailsClick={() => setCurrentPage('product-details')}
          />
        )}

        {currentPage === 'sell' && (
          <Sell user={user} onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'catalog' && (
          <ProductCatalog user={user} onBackClick={() => setCurrentPage('home')} />
        )}

        {currentPage === 'cart' && (
          <AddCart user={user} onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'product-details' && (
          <ProductDetailsPage
            onBack={() => setCurrentPage('buy')}
            onContinue={() => setCurrentPage('order-summary')}
          />
        )}

        {/* {currentPage === 'order-summary' && (
          <OrderSummaryPage
            onBack={() => setCurrentPage('product-details')}
          />
        )} */}

        {currentPage === 'order-summary' && (
  <OrderSummaryPage
    onBack={() => setCurrentPage('product-details')}
    onContinue={() => setCurrentPage('payment')}
  />
)}


{currentPage === 'payment' && (
  <PaymentForm
    onBack={() => setCurrentPage('order-summary')}
    onPaymentSuccess={() => setCurrentPage('home')}
  />
)}


      </>
    </Elements>
  );
}
export default App;
