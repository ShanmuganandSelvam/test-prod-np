import React from 'react';
import { PackageX } from 'lucide-react';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-white rounded-lg shadow-md">
      <PackageX size={48} className="text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
      <p className="text-gray-500 text-center">{message}</p>
    </div>
  );
};

export default EmptyState;
