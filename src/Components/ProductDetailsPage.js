


import React from 'react';
import './ProductDetailsPage.css';

const ProductDetailsPage = ({ onBack, onContinue}) => {
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, selectedProduct];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product added to cart!');
  };

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={onBack}>← Back</button>

      <div className="product-detail-wrapper">
        <div className="image-section">
          <img src={selectedProduct.img} alt={selectedProduct.name} />
        </div>
        <div className="info-section">
          <h2>{selectedProduct.name}</h2>
          <div className="price-section">
            <span className="final-price">₹{selectedProduct.finalPrice}</span>
            <span className="original-price">₹{selectedProduct.price}</span>
            <span className="discount">{selectedProduct.discount}% Off</span>
          </div>
          <div className="rating-section">
            <span className="rating">⭐ {selectedProduct.rating}</span>
            <span> {selectedProduct.reviews} Reviews</span>
            <span className="delivery">{selectedProduct.delivery}</span>
          </div>

          <h4>Select Size</h4>
          <button className="size-button">Free Size</button>

          <div className="action-buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>🛒 Add to Cart</button>
            <button className="buy-now" onClick={onContinue}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
