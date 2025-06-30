import React from 'react';
import './Home.css';


export default function Home({
  onBuyClick,
  onSellClick,
  onLoginClick,
  onSignupClick,
  onLogoutClick,
  onCatalogClick,
  onCartClick,
  user
}) {
  const products = [
    {
      _id: '1',
      title: 'Vintage Chair',
      description: 'Stylish comfort for your living room.',
      price: 2500,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/0a/44b00af06f2cc9f994b2256651fa4050.jpg',
    },
    {
      _id: '2',
      title: 'Designer Lamp',
      description: 'Minimalist lamp with modern design.',
      price: 1800,
      imageUrl: 'https://i.pinimg.com/736x/e4/c1/6a/e4c16a44d74a375cbd3ec4bb19f20268.jpg',
    },
    {
      _id: '3',
      title: 'Wall Art Canvas',
      description: 'Abstract wall art to decorate your space.',
      price: 1200,
      imageUrl: 'https://i.pinimg.com/736x/c6/0e/d6/c60ed637c6b11d902615d93eb462c361.jpg',
    },
    {
      _id: '4',
      title: 'Wooden Bookshelf',
      description: 'Classic shelf with modern finish.',
      price: 3200,
      imageUrl: 'https://i.pinimg.com/736x/32/5c/c7/325cc7cdabea582636f65ace1b4e519c.jpg',
    },
    {
      _id: '5',
      title: 'Wooden Bookshelf',
      description: 'Classic shelf with modern finish.',
      price: 3200,
      imageUrl: 'https://i.pinimg.com/736x/32/5c/c7/325cc7cdabea582636f65ace1b4e519c.jpg',
    },
    {
      _id: '6',
      title: 'Wall Art Canvas',
      description: 'Abstract wall art to decorate your space.',
      price: 1200,
      imageUrl: 'https://i.pinimg.com/736x/c6/0e/d6/c60ed637c6b11d902615d93eb462c361.jpg',
    },
    {
      _id: '7',
      title: 'Designer Lamp',
      description: 'Minimalist lamp with modern design.',
      price: 1800,
      imageUrl: 'https://i.pinimg.com/736x/e4/c1/6a/e4c16a44d74a375cbd3ec4bb19f20268.jpg',
    },
    {
      _id: '8',
      title: 'Vintage Chair',
      description: 'Stylish comfort for your living room.',
      price: 2500,
      imageUrl: 'https://i.pinimg.com/736x/44/b0/0a/44b00af06f2cc9f994b2256651fa4050.jpg',
    },
  ];

  const handleAddToCart = async (product) => {
    if (!user) {
      alert("Please login first to add to .");
      return;
    }

    await fetch("http://localhost:5000/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username, // use username
        product,
      }),

    });
    console.log("🧾 Sending username to backend:", user?.username);

    alert("Product added to cart!");
  };


  return (
    <div className="home-wrapper">
      <header className="header">
        <h1>🛒 Marketplace</h1>
        <nav>
          <ul>
            <li onClick={onBuyClick}>Buy</li>
            <li onClick={onSellClick}>Sell</li>
            <li onClick={onCatalogClick}>Product Catalog</li>

            {!user ? (
              <>
                <li onClick={onLoginClick}>Login</li>
                <li onClick={onSignupClick}>Signup</li>
              </>
            ) : (
              <>
                <li onClick={onCartClick}>🛒 View Cart</li>
                <li className="user-hover-container">
                  👤 {user.username}
                  <div className="user-tooltip">
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>User ID:</strong> {user._id}</p>
                  </div>
                </li>
                <li onClick={onLogoutClick}>Logout</li>
              </>
            )}
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Elevate Your Lifestyle</h2>
          <p>Shop curated collections from real creators.</p>
          <button onClick={onBuyClick}>Explore Now</button>
        </div>
      </section>

      <aside className="sidebar">
        <h3>Categories</h3>
        <ul>
          <li>Furniture</li>
          <li>Lighting</li>
          <li>Art</li>
          <li>Storage</li>
        </ul>
      </aside>

      <main className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <strong>₹{product.price}</strong>
            <button
              onClick={() =>
                handleAddToCart({
                  title: product.title,
                  description: product.description,
                  price: product.price,
                  imageUrl: product.imageUrl,
                })
              }
            >
              Add to Cart
            </button>

          </div>
        ))}
      </main>

      <section className="image-cta">
        <div className="image-text">
          <h2>Experience Shopping Like Never Before</h2>
          <p>Enjoy exclusive deals and handcrafted designs at your fingertips.</p>
          <button>Start Shopping</button>
        </div>
      </section>

      <section className="sell-section">
        <div className="sell-content">
          <div className="sell-text">
            <h2>Become a Seller</h2>
            <p>
              Ready to showcase your creativity? Join our marketplace to reach thousands of buyers.
              Whether you’re a craftsperson, designer, or entrepreneur — we’re here to support your journey.
            </p>
            <button>Start Selling</button>
          </div>
          <div className="sell-image">
            <img
              src="https://i.pinimg.com/736x/c6/0e/d6/c60ed637c6b11d902615d93eb462c361.jpg"
              alt="Sell with us"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 UrbanStyle Marketplace | Built with love ❤️</p>
      </footer>
    </div>
  );
}