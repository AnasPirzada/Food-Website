import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const componentsMap = {
  Tacos: { name: 'Tacos', image: '/tacos.jpg', route: '/submenu/Tacos' },
  Burritos: {
    name: 'Burritos',
    image: '/burritos.jpg',
    route: '/submenu/Burritos',
  },
  Addons: {
    name: 'Add-ons',
    image: '/addons.jpg',
    route: '/submenu/Addons',
  },
  IceCream: {
    name: 'Natural Fruit ice-cream / Raspados',
    image: '/icecream.jpg',
    route: '/submenu/IceCream',
  },
  Refreshments: {
    name: 'Refreshments',
    image: '/Refreshments.jpg',
    route: '/submenu/Refreshments',
  },
};

export const MenuSection = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const navigate = useNavigate();

  const handleNavigation = route => {
    navigate(route);
    // Scroll to the top of the page after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='pt-24'>
      <div className='w-[95%] md:w-[80%] mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
          {Object.entries(componentsMap).map(([key, tab]) => (
            <div
              key={key}
              className={`card cursor-pointer flex flex-col mb-11 items-center text-center  border border-gray-300 ${
                selectedTab === key ? 'border-[#EC9047]' : ''
              }`}
              onClick={() => handleNavigation(tab.route)}
            >
              <button>
                <img src={tab.image} alt={tab.name} className='w-full h-full' />
                <span className='text-lg lowercase pt-4 font-medium text-[#EC9047]'>
                  {tab.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
