import React, { useState, useEffect } from 'react';
import FilterSidebar from '../FilterBox/index.jsx'
import ProductCard from '../ProductCard/index.jsx';
import './Shop.css'; 

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    skinType: '',
    categories: []
  });

  // ✅ Add this helper function to convert string price to number
  const parsePrice = (priceString) => parseFloat(priceString.replace('$', ''));

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // default
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Apply filters
  const applyFilters = (updatedFilters) => {
    setFilters(updatedFilters);
    let filtered = [...products];

    // Apply category filter
    if (updatedFilters.categories.length) {
      filtered = filtered.filter(p =>
        updatedFilters.categories.includes(p.category)
      );
    }

    // Apply skin type filter
    if (updatedFilters.skinType) {
      filtered = filtered.filter(p => p.skinType === updatedFilters.skinType);
    }

    // ✅ Apply price range filter correctly
    filtered = filtered.filter(p =>
      parsePrice(p.price) >= updatedFilters.priceRange[0] &&
      parsePrice(p.price) <= updatedFilters.priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="shop-container"
    >
      <FilterSidebar filters={filters} onFilterChange={applyFilters} />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
