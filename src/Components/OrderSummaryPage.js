

import React, { useState } from 'react';
import './OrderSummaryPage.css';

const OrderSummaryPage = ({ onBack, onContinue  }) => {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  const [address, setAddress] = useState({
    name: "ABC",
    addressLine: "310, punjab.india",
    city: "Punjab",
    pincode: "140576",
    mobile: "6200000000",
    state: "Punjab"
  });

  const [showPopup, setShowPopup] = useState(false);
  const [tempAddress, setTempAddress] = useState(address);

  const handleInputChange = (e) => {
    setTempAddress({ ...tempAddress, [e.target.name]: e.target.value });
  };

  const saveNewAddress = () => {
    setAddress(tempAddress);
    setShowPopup(false);
  };

  return (
    <div className="order-summary-container">
      <button className="back-button" onClick={onBack}>← Back</button>

      <div className="order-wrapper">
        <div className="order-left">
          <h3>Product Details</h3>
          <p className="delivery-estimate">📦 Estimated Delivery by {product.deliveryDate || 'Thursday, 10th Jul'}</p>

          <div className="product-box">
            <img src={product.img} alt={product.name} />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="price">
                ₹{product.finalPrice || product.price}
                <span className="strikethrough"> ₹{product.price}</span>
                <span className="discount">{product.discount || 11}% Off</span>
              </p>
              <p>Size: Free Size • Qty: 1</p>
              <p>Sold by: AMEEBA EMPORIUM</p>
              <p className="free-delivery">{product.delivery}</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="address-section">
            <h4>📍 Delivery Address (default)</h4>
            <div className="address-box">
              <p><strong>{address.name}</strong></p>
              <p>{address.addressLine},<br />{address.city}, {address.state} - {address.pincode}</p>
              <p>📞 {address.mobile}</p>
              <button className="change-btn" onClick={() => setShowPopup(true)}>Change Address</button>
            </div>
          </div>
        </div>

        <div className="order-right">
          <h3>Price Details (1 Item)</h3>
          <div className="price-detail">
            <p>Total Product Price <span>₹{product.price}</span></p>
            <p className="discount-line">Total Discounts <span>- ₹{product.discount || 31}</span></p>
            <hr />
            <p className="total">Order Total <span>₹{product.finalPrice || product.price}</span></p>
            <div className="success-box">✅ Yay! Your total discount is ₹{product.discount || 31}</div>
          </div>

        <button className="continue-button" onClick={onContinue}>
          Continue
        </button>
        </div>
      </div>

      {/* Popup for Changing Address */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Edit Address</h3>
            <input type="text" name="name" placeholder="Name" value={tempAddress.name} onChange={handleInputChange} />
            <input type="text" name="addressLine" placeholder="Address" value={tempAddress.addressLine} onChange={handleInputChange} />
            <input type="text" name="city" placeholder="City" value={tempAddress.city} onChange={handleInputChange} />
            <input type="text" name="state" placeholder="State" value={tempAddress.state} onChange={handleInputChange} />
            <input type="text" name="pincode" placeholder="Pincode" value={tempAddress.pincode} onChange={handleInputChange} />
            <input type="text" name="mobile" placeholder="Mobile Number" value={tempAddress.mobile} onChange={handleInputChange} />
            <div className="popup-buttons">
              <button onClick={saveNewAddress}>Save</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummaryPage;
