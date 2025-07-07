import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [isOpen, setIsOpen] = useState(false); // ← toggle state for mobile

  const handleCategoryChange = (category) => {
    const newCategories = localFilters.categories.includes(category)
      ? localFilters.categories.filter(c => c !== category)
      : [...localFilters.categories, category];
    updateFilters({ ...localFilters, categories: newCategories });
  };

  const handleSortChange = (e) => {
    updateFilters({ ...localFilters, sortOrder: e.target.value });
  };

  const updateFilters = (newFilters) => {
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={`filter-sidebar-wrapper ${isOpen ? 'open' : ''}`}>
      {/* Toggle Button on Small Screens */}
      <button
        className="filter-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Filters ✖' : 'Open Filters ☰'}
      </button>

      <div className="filter-sidebar">
        <h3>Filters</h3>

        <div className="filter-group">
          <label>Categories</label>
          {[
            'hand-and-body',
            'Fragrance',
            'Skin Care - Dry',
            'Skin Care - Oily',
            'Skin Care - Combination'
          ].map(category => (
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

        <div className="filter-group">
          <label>Sort by Price</label>
          <select
            value={localFilters.sortOrder || ''}
            onChange={handleSortChange}
          >
            <option value="">None</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
