// Card.js
import React from 'react';

const Card = ({
  image,
  title,
  subheading,
  description,
  price,
  categoryName,
}) => {
  return (
    <div className='w-full'>
      <img
        className='w-full h-64 object-cover rounded-lg overflow-hidden'
        src={image}
        alt={title}
      />
      <div className='py-6'>
        <div className='flex justify-between items-center mb-2'>
          <div className='flex flex-col justify-start items-start'>
            <h2 className='text-xl text-[#212121]  Gilroy-SemiBold font-normal'>
              {title}
            </h2>
            <p className='Gilroy-Regular text-[14px]  text-[#212121]'>
              {subheading}
            </p>
          </div>
          <div>
            <span className='text-xl font-normal text-[23.88px] text-[#212121] Gilroy-SemiBold'>
              {price}
            </span>
          </div>
        </div>

        <p className='text-sm text-[#212121] font-light Gilroy-Light  mb-4'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
