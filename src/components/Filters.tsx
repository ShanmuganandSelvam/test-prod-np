import React from 'react';
import { Filter, X } from 'lucide-react';
import { FilterOptions } from '../types/product';

interface FiltersProps {
  categories: string[];
  priceRange: { min: number; max: number };
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  isFilterOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filters: React.FC<FiltersProps> = ({
  categories,
  priceRange,
  filters,
  setFilters,
  isFilterOpen,
  setIsFilterOpen
}) => {
  const handleCategoryChange = (category: string | null) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = value === '' ? null : Number(value);
    setFilters(prev => ({ ...prev, [type === 'min' ? 'minPrice' : 'maxPrice']: numValue }));
  };

  const handleCheckboxChange = (field: 'inStock' | 'featured') => {
    setFilters(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const resetFilters = () => {
    setFilters({
      category: null,
      minPrice: null,
      maxPrice: null,
      inStock: false,
      featured: false
    });
  };

  return (
    <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <Filter size={18} className="mr-2" />
            Filters
          </h2>
          <div className="flex items-center">
            <button 
              onClick={resetFilters}
              className="text-sm text-blue-600 hover:text-blue-800 mr-3"
            >
              Reset
            </button>
            <button 
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsFilterOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Categories</h3>
          <div className="space-y-1">
            <div className="flex items-center">
              <button
                className={`text-sm py-1 px-2 rounded-md w-full text-left ${
                  filters.category === null ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleCategoryChange(null)}
              >
                All Categories
              </button>
            </div>
            {categories.map(category => (
              <div key={category} className="flex items-center">
                <button
                  className={`text-sm py-1 px-2 rounded-md w-full text-left ${
                    filters.category === category ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
          <div className="flex items-center space-x-2">
            <div className="relative rounded-md shadow-sm flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                min={priceRange.min}
                max={priceRange.max}
                value={filters.minPrice ?? ''}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                placeholder="Min"
                className="block w-full rounded-md border-gray-300 pl-7 pr-2 py-1.5 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <span className="text-gray-500">-</span>
            <div className="relative rounded-md shadow-sm flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                min={priceRange.min}
                max={priceRange.max}
                value={filters.maxPrice ?? ''}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                placeholder="Max"
                className="block w-full rounded-md border-gray-300 pl-7 pr-2 py-1.5 text-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium text-gray-700 mb-2">Product Status</h3>
          <div className="flex items-center">
            <input
              id="inStock"
              type="checkbox"
              checked={filters.inStock}
              onChange={() => handleCheckboxChange('inStock')}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
              In Stock Only
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="featured"
              type="checkbox"
              checked={filters.featured}
              onChange={() => handleCheckboxChange('featured')}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
              Featured Products
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
