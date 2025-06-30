// src/Components/ProductCatalog.js
import React, { useState } from 'react';
import './ProductCatalog.css';

const allItems = [
  {
    id: 101,
    name: 'DSLR Camera',
    category: 'Electronics',
    description: 'High-definition professional camera',
    price: 500,
    image: 'https://i.pinimg.com/736x/44/b0/0a/44b00af06f2cc9f994b2256651fa4050.jpg',
  },
  {
    id: 102,
    name: 'Smartphone',
    category: 'Electronics',
    description: 'Latest model with all features',
    price: 799,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 103,
    name: 'Wooden Chair',
    category: 'Furniture',
    description: 'Ergonomic wooden chair for comfort',
    price: 250,
    image: 'https://i.pinimg.com/736x/e4/c1/6a/e4c16a44d74a375cbd3ec4bb19f20268.jpg',
  },
  {
    id: 104,
    name: 'Canvas Art',
    category: 'Art',
    description: 'Modern wall art to brighten up spaces',
    price: 150,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 105,
    name: 'Bookshelf',
    category: 'Furniture',
    description: 'Spacious wooden bookshelf',
    price: 300,
    image: 'https://i.pinimg.com/736x/c6/0e/d6/c60ed637c6b11d902615d93eb462c361.jpg',
  },{
    id: 106,
    name: 'Wooden Chair',
    category: 'Furniture',
    description: 'Ergonomic wooden chair for comfort',
    price: 250,
    image: 'https://i.pinimg.com/736x/e4/c1/6a/e4c16a44d74a375cbd3ec4bb19f20268.jpg',
  },
  {
    id: 107,
    name: 'Canvas Art',
    category: 'Art',
    description: 'Modern wall art to brighten up spaces',
    price: 150,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 108,
    name: 'Bookshelf',
    category: 'Furniture',
    description: 'Spacious wooden bookshelf',
    price: 300,
    image: 'https://i.pinimg.com/736x/c6/0e/d6/c60ed637c6b11d902615d93eb462c361.jpg',
  },
  {
    id: 109,
    name: 'DSLR Camera',
    category: 'Electronics',
    description: 'High-definition professional camera',
    price: 500,
    image: 'https://i.pinimg.com/736x/44/b0/0a/44b00af06f2cc9f994b2256651fa4050.jpg',
  },
  {
    id: 110,
    name: 'Smartphone',
    category: 'Electronics',
    description: 'Latest model with all features',
    price: 799,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 111,
    name: 'Wooden Chair',
    category: 'Furniture',
    description: 'Ergonomic wooden chair for comfort',
    price: 250,
    image: 'https://i.pinimg.com/736x/e4/c1/6a/e4c16a44d74a375cbd3ec4bb19f20268.jpg',
  },
  {
    id: 112,
    name: 'Canvas Art',
    category: 'Art',
    description: 'Modern wall art to brighten up spaces',
    price: 150,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 113,
    name: 'Bookshelf',
    category: 'Furniture',
    description: 'Spacious wooden bookshelf',
    price: 300,
    image: 'https://i.pinimg.com/736x/c6/0e/d6/c60ed637c6b11d902615d93eb462c361.jpg',
  },{
    id: 114,
    name: 'Wooden Chair',
    category: 'Furniture',
    description: 'Ergonomic wooden chair for comfort',
    price: 250,
    image: 'https://i.pinimg.com/736x/e4/c1/6a/e4c16a44d74a375cbd3ec4bb19f20268.jpg',
  },
  {
    id: 115,
    name: 'Canvas Art',
    category: 'Art',
    description: 'Modern wall art to brighten up spaces',
    price: 150,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 116,
    name: 'Bookshelf',
    category: 'Furniture',
    description: 'Spacious wooden bookshelf',
    price: 300,
    image: 'https://i.pinimg.com/736x/c6/0e/d6/c60ed637c6b11d902615d93eb462c361.jpg',
  },
  {
    id: 116,
    name: 'Bookshelf',
    category: 'Furniture',
    description: 'Spacious wooden bookshelf',
    price: 300,
    image: 'https://i.pinimg.com/736x/c6/0e/d6/c60ed637c6b11d902615d93eb462c361.jpg',
  },
];



export default function ProductCatalog({ user, onBackClick ,}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');
  // const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;



 
  const filteredItems = allItems
    .filter(item =>
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'low') return a.price - b.price;
      if (sortOption === 'high') return b.price - a.price;
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

 
  const handleAddToCart = async (product) => {
  if (!user) {
    alert("Please login first to add to cart.");
    return;
  }

  await fetch('http://localhost:5000/cart/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: user.username, product }),
  });

  alert("Product added to cart!");
};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="catalog-wrapper">
      <div className="catalog-content">
        <button className="back-button" onClick={onBackClick}>← Back to Home</button>
        <h2>🛍️ Product Catalog</h2>

        <div className="catalog-grid">
          {currentItems.length === 0 ? (
            <p>No products found.</p>
          ) : (
           currentItems.map(({ id, name, description, price, image }) => (
  <div key={id} className="catalog-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p className="price">${price}</p>
    <button
      onClick={() =>
        handleAddToCart({
          title: name,
          description: description,
          price: price,
          imageUrl: image,
        })
      }
    >
      Add to Cart
    </button>
  </div>
))
          )}
        </div>

        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? 'active' : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <aside className="catalog-sidebar">
        <h3>Filter & Search</h3>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Art">Art</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </aside>
    </div>
  );
}