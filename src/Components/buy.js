import React, { useState } from 'react';
import './buy.css';
// import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    img: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=400&q=80',
    price: 45000,
    delivery: 'Free Delivery',
    rating: 4.3,
    reviews: 321,
    buyCount: 1800
  },
  {
    id: 2,
    name: 'Smartphone',
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
    price: 12999,
    delivery: '₹49 Delivery',
    rating: 4.1,
    reviews: 145,
    buyCount: 950
  },
  {
    id: 3,
    name: 'Bluetooth Headphones',
    img: 'https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946',
    price: 1999,
    rating: 4.5,
    reviews: 530,
     delivery: 'Free Delivery',
    buyCount: 3200
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 90,
    rating: 4.3,
    reviews: 530,
     delivery: 'Free Delivery',
    buyCount: 3200,
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'LED Monitor',
    price: 300,
    rating: 4.6,
    reviews: 145,
    buyCount: 950,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 85,
    rating: 4.5,
    reviews: 321,
    buyCount: 1800,
    img: 'https://ix-marketing.imgix.net/autocompress.png?auto=format,compress&w=1946',
  },
  {
    id: 7,
    name: 'Noise Cancelling Earbuds',
    price: 150,
    rating: 4.6,
    reviews: 145,
    buyCount: 950,
    img: 'https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946',
  },
  {
    id: 8,
    name: 'Tablet',
    price: 450,
    rating: 4.4,
    reviews: 321,
    buyCount: 1800,
    img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    name: 'External SSD',
    price: 99,
    rating: 4.8,
    reviews: 321,
    buyCount: 1800,
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    name: 'Fitness Band',
    price: 60,
    rating: 4.2,
    reviews: 145,
    buyCount: 950,
    img: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 11,
    name: 'VR Headset',
    price: 399,
    rating: 4.7,
    reviews: 321,
    buyCount: 1800,
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 12,
    name: 'Portable Charger',
    price: 45,
    rating: 4.3,
    reviews: 145,
    buyCount: 950,
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Buy({ user, onBack, onDetailsClick }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [popupVisible, setPopupVisible] = useState(false);
  const [priceFilter, setPriceFilter] = useState(null);
  // const navigate = useNavigate();


  const handleProductClick = (product) => {
    if (!user) {
      alert('Please log in.');
      return;
    }
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  onDetailsClick(); // trigger product details page

    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleBuy = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) => {
    if (priceFilter === 'under500') return product.price < 500;
    if (priceFilter === '500to1000') return product.price >= 500 && product.price <= 1000;
    if (priceFilter === '1000to2000') return product.price > 1000 && product.price <= 2000;
    if (priceFilter === '2000above') return product.price > 2000;
    return true;
  });

  return (
    <div className="buy-page">
      <button onClick={onBack} className='back-button'>← Back</button>
      <div className="buy-container">
        {/* Left Section */}
        <div className="left-section">
          <h2>Buy Products</h2>

          {/* Filters */}
          <div className="filters">
            <h3>Filters</h3>

            {/* Price Filter */}
            <div className="filter-group">
              <h4>Price</h4>
              <label>
                <input type="radio" name="price" onChange={() => setPriceFilter('under500')} />
                Under ₹500
              </label>
              <label>
                <input type="radio" name="price" onChange={() => setPriceFilter('500to1000')} />
                ₹500 – ₹1000
              </label>
              <label>
                <input type="radio" name="price" onChange={() => setPriceFilter('1000to2000')} />
                ₹1000 – ₹2000
              </label>
              <label>
                <input type="radio" name="price" onChange={() => setPriceFilter('2000above')} />
                ₹2000 & Above
              </label>
            </div>

            {/* Other filters — static for now */}
            <div className="filter-group">
              <h4>Rating</h4>
              <label><input type="checkbox" /> ⭐ 4.0 & above</label>
              <label><input type="checkbox" /> ⭐ 3.0 – 4.0</label>
              <label><input type="checkbox" /> ⭐ below 3.0</label>
            </div>

            <div className="filter-group">
              <h4>Discount</h4>
              <label><input type="checkbox" /> 10% or more</label>
              <label><input type="checkbox" /> 25% or more</label>
              <label><input type="checkbox" /> 50% or more</label>
              <label><input type="checkbox" /> 70% or more</label>
            </div>

            <div className="filter-group">
              <h4>Color</h4>
              <label><input type="checkbox" /> Black</label>
              <label><input type="checkbox" /> White</label>
              <label><input type="checkbox" /> Blue</label>
              <label><input type="checkbox" /> Red</label>
              <label><input type="checkbox" /> Pink</label>
            </div>
          </div>

          {/* Selected Product */}
          {selectedProduct && (
            <div className="selected-product">
              <h3>{selectedProduct.name}</h3>
              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button className="buy-button" onClick={handleBuy}>
                Buy ₹{selectedProduct.price * quantity}
              </button>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product)}
              >
                <img src={product.img} alt={product.name} />
                <div className="product-basic">
                  <h4>{product.name}</h4>
                  <p>₹{product.price}</p>
                </div>
                <div className="product-hover">
                  <p>Price: ₹{product.price}</p>
                  <p>Delivery: {product.delivery}</p>
                  <p>Rating: ⭐ {product.rating} ({product.reviews} Reviews)</p>
                  <p>Buy Count: {product.buyCount}+</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {popupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Success!</h2>
            <p>
              You bought {quantity} × {selectedProduct.name} for ₹
              {selectedProduct.price * quantity}
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}