import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Noise-cancelling wireless headphones with premium sound quality and 30-hour battery life.',
    price: 299.99,
    discountedPrice: 249.99,
    category: 'Electronics',
    tags: ['audio', 'wireless', 'headphones'],
    rating: 4.8,
    stock: 45,
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: '2',
    name: 'Ultra-Slim Laptop',
    description: 'Powerful and lightweight laptop with 16GB RAM and 512GB SSD storage.',
    price: 1299.99,
    category: 'Electronics',
    tags: ['computer', 'laptop', 'work'],
    rating: 4.5,
    stock: 12,
    imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with this waterproof smart watch featuring heart rate monitoring.',
    price: 199.99,
    discountedPrice: 149.99,
    category: 'Wearables',
    tags: ['fitness', 'watch', 'health'],
    rating: 4.3,
    stock: 78,
    imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with lumbar support and adjustable height.',
    price: 249.99,
    category: 'Furniture',
    tags: ['office', 'chair', 'ergonomic'],
    rating: 4.6,
    stock: 23,
    imageUrl: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: '5',
    name: 'Professional DSLR Camera',
    description: '24.1 megapixel DSLR camera with 4K video recording capabilities.',
    price: 899.99,
    discountedPrice: 799.99,
    category: 'Electronics',
    tags: ['camera', 'photography', 'professional'],
    rating: 4.9,
    stock: 8,
    imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: '6',
    name: 'Stainless Steel Water Bottle',
    description: 'Eco-friendly insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 34.99,
    category: 'Kitchen',
    tags: ['bottle', 'eco-friendly', 'hydration'],
    rating: 4.7,
    stock: 120,
    imageUrl: 'https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 49.99,
    discountedPrice: 39.99,
    category: 'Electronics',
    tags: ['charger', 'wireless', 'accessories'],
    rating: 4.2,
    stock: 65,
    imageUrl: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: '8',
    name: 'Smart Home Security Camera',
    description: 'HD security camera with motion detection and two-way audio.',
    price: 129.99,
    category: 'Smart Home',
    tags: ['security', 'camera', 'smart home'],
    rating: 4.4,
    stock: 0,
    imageUrl: 'https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: '9',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 20-hour battery life and deep bass.',
    price: 89.99,
    discountedPrice: 69.99,
    category: 'Electronics',
    tags: ['speaker', 'bluetooth', 'portable'],
    rating: 4.1,
    stock: 42,
    imageUrl: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: '10',
    name: 'Premium Coffee Maker',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 199.99,
    category: 'Kitchen',
    tags: ['coffee', 'appliance', 'kitchen'],
    rating: 4.7,
    stock: 18,
    imageUrl: 'https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: '11',
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat made from eco-friendly materials.',
    price: 39.99,
    category: 'Fitness',
    tags: ['yoga', 'fitness', 'exercise'],
    rating: 4.5,
    stock: 85,
    imageUrl: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false
  },
  {
    id: '12',
    name: 'Smart LED TV',
    description: '55-inch 4K Ultra HD Smart LED TV with built-in streaming apps.',
    price: 699.99,
    discountedPrice: 599.99,
    category: 'Electronics',
    tags: ['tv', 'entertainment', 'smart'],
    rating: 4.6,
    stock: 15,
    imageUrl: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  }
];

export const categories = [...new Set(products.map(product => product.category))];

export const priceRange = {
  min: Math.min(...products.map(product => product.price)),
  max: Math.max(...products.map(product => product.price))
};
