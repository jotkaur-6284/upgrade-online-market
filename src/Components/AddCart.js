import React, { useEffect, useState } from 'react';

const AddCart = ({ user,onBack  }) => {
  const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  if (!user || !user._id) return;
fetch(`https://upgrade-online-market-2.onrender.com/cart/user/${user._id}`)
    .then((res) => res.json())
    .then((data) => setCartItems(data))
    .catch((err) => console.error("Fetch cart error:", err));
}, [user]);

  const handleDelete = async (id) => {
   await fetch(`https://upgrade-online-market-2.onrender.com/cart/delete/${id}`, { method: 'DELETE' });

    setCartItems(cartItems.filter(item => item._id !== id));
  };

  if (!user) return <h2>Please login to view your cart.</h2>;

  return (
    <div className="cart-container">
  <h2>Your Cart</h2>
  <button className="back-home-button" onClick={onBack}>⬅ Back to Home</button>

  <div className="cart-scroll-wrapper">
    <div className="cart-grid"   style={{ display: 'flex', padding: '30px', overflowX: 'auto', gap: '20px' }}>
      {cartItems.map(({ _id, product }) => (
        <div key={_id} className="product-card">
          <img src={product.imageUrl} alt={product.title} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <strong>₹{product.price}</strong>
          <button onClick={() => handleDelete(_id)}>Remove</button>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default AddCart;
