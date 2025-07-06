import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleCategoryChange = (category) => {
    const newCategories = localFilters.categories.includes(category)
      ? localFilters.categories.filter(c => c !== category)
      : [...localFilters.categories, category];

    updateFilters({ ...localFilters, categories: newCategories });
  };

  const updateFilters = (newFilters) => {
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter-sidebar">
      <h3>Filter</h3>

      <div className="filter-group">
        <label>Price Range</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={localFilters.priceRange[1]}
          onChange={(e) =>
            updateFilters({ ...localFilters, priceRange: [0, Number(e.target.value)] })
          }
        />
        <span>Up to ${localFilters.priceRange[1]}</span>
      </div>

      <div className="filter-group">
        <label>Skin Type</label>
        <select
          value={localFilters.skinType}
          onChange={(e) => updateFilters({ ...localFilters, skinType: e.target.value })}
        >
          <option value="">All</option>
          <option value="Oily">Oily</option>
          <option value="Dry">Dry</option>
          <option value="Sensitive">Sensitive</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Categories</label>
        {['Hand and Body', 'Fragrance', 'Skin', 'Hair'].map(category => (
          <div key={category}>
            <input
              type="checkbox"
              checked={localFilters.categories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
