import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    name,
    description,
    price,
    discountedPrice,
    rating,
    stock,
    imageUrl,
    featured
  } = product;

  const isOnSale = discountedPrice !== undefined;
  const isOutOfStock = stock === 0;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {featured && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </span>
        )}
        {isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Sale
          </span>
        )}
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100">
          <Heart size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center mb-1">
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="ml-2 text-xs text-gray-500">
            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
          </span>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center mb-3">
            {isOnSale ? (
              <>
                <span className="text-lg font-bold text-gray-900">${discountedPrice?.toFixed(2)}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
            )}
          </div>
          
          <button 
            className={`w-full py-2 px-4 rounded-md flex items-center justify-center transition-colors ${
              isOutOfStock 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            disabled={isOutOfStock}
          >
            <ShoppingCart size={18} className="mr-2" />
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
