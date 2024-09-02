// MenuSection.js
import React, { useState } from 'react';
import Card from './Card';

const componentsMap = {
  All: 'All',
  Tacos: 'Tacos',
  Burritos: 'Burritos',
  'Natural Fruit ice-cream / Raspados': 'Natural Fruit ice-cream / Raspados',
  Refreshments: 'Refreshments',
  'Add-ons': 'Add-ons',
};

const MenuSection = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabClick = tab => {
    setSelectedTab(tab);
  };

  const cardsData = [
    {
      image:
        'https://images.unsplash.com/photo-1672099260380-4ba66eead8ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Tasty Tacos',
      description: 'Delicious tacos with fresh ingredients.',
      price: '$5',
      categoryName: 'Tacos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Big Burritos',
      description: 'Burritos filled with beans, rice, and meat.',
      price: '$7',
      categoryName: 'Burritos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1618043404023-185423114c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Raspados',
      description: 'Natural fruit ice-cream.',
      price: '$3',
      categoryName: 'Natural Fruit ice-cream / Raspados',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1679397828457-8140565d6a57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cool Refreshments',
      description: 'Fresh drinks to cool you down.',
      price: '$2',
      categoryName: 'Refreshments',
    },
    {
      image:
        'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Extra Add-ons',
      description: 'Add-ons to complement your meal.',
      price: '$1',
      categoryName: 'Add-ons',
    },
  ];

  const filteredCards =
    selectedTab === 'All'
      ? cardsData
      : cardsData.filter(card => card.categoryName === selectedTab);

  return (
    <div className='pt-24'>
      <div className='w-[80%] mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
          <div className='flex flex-wrap justify-between text-center md:flex-nowrap md:space-x-4 mb-4 md:mb-0'>
            {Object.keys(componentsMap).map(tab => (
              <button
                key={tab}
                className={`bg-transparent text-[#EC9047] font-normal text-[20px] md:text-[24px] border-b-2 ${
                  selectedTab === tab
                    ? 'border-b-[#EC9047]'
                    : 'border-b-transparent'
                } md:pb-0 md:mb-0 mb-2`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
              categoryName={card.categoryName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
