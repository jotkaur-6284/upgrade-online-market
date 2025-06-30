import React from 'react';
import './Sell.css';

export default function Sell({ user, onBack }) {
  return (
    <div className="sell-container">
      <h2 className="sell-title">Sell Your Product</h2>

      <form className="sell-form">
        <label>
          Product Name:
          <input type="text" placeholder="Enter product name" />
        </label>
        <label>
          Price:
          <input type="number" placeholder="Enter price" />
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" />
        </label>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <button className="back-btn" onClick={onBack}>← Back</button>
    </div>
  );
}
