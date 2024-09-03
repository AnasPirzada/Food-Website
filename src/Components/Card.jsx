// Card.js
import React from 'react';

const Card = ({ image, title, subheading, description, price, categoryName }) => {
  return (
    <div className='w-full'>
      <img
        className='w-full h-64 object-cover rounded-lg overflow-hidden'
        src={image}
        alt={title}
      />
      <div className='py-6'>
        <h2 className='text-xl text-[#212121] mb-2 Gilroy-SemiBold font-normal'>{title}</h2>
        <p>{subheading}</p>
        <p className='text-sm text-gray-700 mb-4'>{description}</p>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-bold'>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
