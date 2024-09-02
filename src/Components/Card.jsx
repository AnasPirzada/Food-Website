// Card.js
import React from 'react';

const Card = ({ image, title, description, price, categoryName }) => {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white'>
      <img className='w-full h-64 object-cover' src={image} alt={title} />
      <div className='p-6'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-sm text-gray-700 mb-4'>{description}</p>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-bold'>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
