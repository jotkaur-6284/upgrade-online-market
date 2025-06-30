import React, { useState } from 'react';
import './sty.css';

export default function Signup({ onHomeClick }) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://upgrade-online-market-2.onrender.com/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, age, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Signup successful! You can now login.');
      } else {
        setMessage(result.message || 'Signup failed');
      }
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Create Your Account ✨</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
          <button type="button" onClick={onHomeClick} className="signup-back-btn">← Back to Home</button>
        </form>
        {message && <p className="signup-message">{message}</p>}
      </div>
    </div>
  );
}
