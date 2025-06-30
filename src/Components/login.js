import React, { useState } from 'react';
import './sty.css';

export default function Login({ onLoginSuccess, onBack, loginMessage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://upgrade-online-market-2.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // ✅ use "username", not email
      });

      let data;
      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        alert("Server error: " + text);
        return;
      }

      if (data.success) {
        console.log("Login success", data);
        alert("Login successful!");
        onLoginSuccess(data.user);
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error");
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
