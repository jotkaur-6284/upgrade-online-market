import React, { useState } from 'react';
import './sty.css';

export default function Login({ onLoginSuccess, onBack, loginMessage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful!');
        onLoginSuccess(data.user);
      } else {
        alert('Login failed');
      }
    } catch (err) {
      alert('Server error');
      console.error(err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <button onClick={onBack} className="back-btn">← Back</button>
        <h2>Welcome Back 👋</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {loginMessage && <p className="success-msg">{loginMessage}</p>}
      </div>
    </div>
  );
}
