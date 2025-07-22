import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterSidebar from '../FilterBox/index.jsx';
import ProductCard from '../ProductCard/index.jsx';
import './Shop.css';

const Shop = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({
    sortOrder: '',         // lowToHigh or highToLow
    skinType: '',
    categories: []
  });

  const parsePrice = (priceString) => parseFloat(priceString.replace('$', ''));

  const normalize = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);

        if (category) {
          const filteredByCategory = data.filter(p =>
            normalize(p.category) === category.toLowerCase()
          );
          setFilteredProducts(filteredByCategory);
        } else {
          setFilteredProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  const applyFilters = (updatedFilters) => {
    setFilters(updatedFilters);
    let filtered = [...products];

    // Apply category filters (checkbox)
    if (updatedFilters.categories.length) {
      filtered = filtered.filter(p =>
        updatedFilters.categories.includes(p.category)
      );
    }

    // Apply skin type filter
    if (updatedFilters.skinType) {
      filtered = filtered.filter(p => p.skinType === updatedFilters.skinType);
    }

    // Apply sort order
    if (updatedFilters.sortOrder === 'lowToHigh') {
      filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (updatedFilters.sortOrder === 'highToLow') {
      filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="shop-wrapper">
      <h2 className="category-heading">
        {category ? `${category.replace(/-/g, ' ')} Products` : 'All Products'}
      </h2>

      <div className="shop-container">
        <FilterSidebar filters={filters} onFilterChange={applyFilters} />
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
