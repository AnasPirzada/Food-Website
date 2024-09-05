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
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to control menu visibility
  const itemsPerPage = 6;

  const handleTabClick = tab => {
    setSelectedTab(tab);
    setCurrentPage(1); // Reset to page 1 when tab changes
    setIsMenuVisible(false); // Hide menu after selection
  };

  const cardsData = [
    {
      image:
        'https://images.unsplash.com/photo-1672099260380-4ba66eead8ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Tasty Tacos',
      subheading: 'Combo Plate ( flank/flap/skirt)',
      description:
        'perfectly marinated CARNE ASADA and 4 LARGE SIZE soft corn tortillas, homemade creamy style smoke-flavored black beans and abuelita (grandma) style rice. All served on the side.',
      price: '$5',
      categoryName: 'Tacos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Big Burritos',
      subheading: 'Combo Plate ( flank/flap/skirt)',

      description:
        'perfectly marinated CARNE ASADA and 4 LARGE SIZE soft corn tortillas, homemade creamy style smoke-flavored black beans and abuelita (grandma) style rice. All served on the side.',
      price: '$7',
      categoryName: 'Burritos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1618043404023-185423114c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Raspados',
      subheading: 'Combo Plate ( flank/flap/skirt)',

      description:
        'perfectly marinated CARNE ASADA and 4 LARGE SIZE soft corn tortillas, homemade creamy style smoke-flavored black beans and abuelita (grandma) style rice. All served on the side.',
      price: '$3',
      categoryName: 'Natural Fruit ice-cream / Raspados',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1679397828457-8140565d6a57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cool Refreshments',
      subheading: 'Combo Plate ( flank/flap/skirt)',

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
    {
      image:
        'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Spicy Nachos',
      description: 'Crispy nachos topped with spicy cheese and jalapeños.',
      price: '$4',
      categoryName: 'Add-ons',
    },
    {
      image:
        'https://images.unsplash.com/photo-1680992071073-cb1696ba8d3e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Fresh Guacamole',
      description: 'Creamy guacamole made with ripe avocados.',
      price: '$3',
      categoryName: 'Refreshments',
    },
    {
      image:
        'https://images.unsplash.com/photo-1515579171902-e0c5f918b32b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Churros',
      description: 'Sweet and crunchy churros sprinkled with cinnamon sugar.',
      price: '$2',
      categoryName: 'Add-ons',
    },
    {
      image:
        'https://images.unsplash.com/photo-1498601566872-21706d8e6fdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Salsa & Chips',
      description: 'Crunchy tortilla chips served with fresh salsa.',
      price: '$3',
      categoryName: 'Burritos',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1672753749156-6281cfeb25f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Loaded Quesadilla',
      description: 'Cheesy quesadilla stuffed with veggies and meats.',
      price: '$6',
      categoryName: 'Tacos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1570716774271-ab30ad4924a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mexican Street Corn',
      description:
        'Grilled corn on the cob, topped with cheese and chili powder.',
      price: '$4',
      categoryName: 'Refreshments',
    },
    {
      image:
        'https://images.unsplash.com/photo-1629304881031-05f1ea6ee406?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Fish Tacos',
      description: 'Soft tortillas filled with crispy fish and fresh slaw.',
      price: '$6',
      categoryName: 'Tacos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1689774187968-0e6c29a1d82e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Chicken Fajitas',
      description: 'Sizzling chicken fajitas with peppers and onions.',
      price: '$8',
      categoryName: 'Add-ons',
    },
    {
      image:
        'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Beef Enchiladas',
      description: 'Beef enchiladas covered in rich red sauce.',
      price: '$7',
      categoryName: 'Burritos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Vegetarian Tostadas',
      description: 'Crispy tostadas topped with beans, cheese, and veggies.',
      price: '$5',
      categoryName: 'Tacos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Carne Asada Fries',
      description: 'Fries loaded with carne asada, cheese, and guacamole.',
      price: '$9',
      categoryName: 'Add-ons',
    },
    {
      image:
        'https://images.unsplash.com/photo-1705445089969-2467bca59d87?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Margaritas',
      description: 'classNameic margaritas with a twist of lime.',
      price: '$6',
      categoryName: 'Burritos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1524412529635-a258ed66c010?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Shrimp Tacos',
      description: 'Grilled shrimp tacos with a tangy lime sauce.',
      price: '$7',
      categoryName: 'Tacos',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1661373057573-f0be9e070acf?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Tamales',
      description: 'Traditional tamales with a savory filling.',
      price: '$3',
      categoryName: 'Natural Fruit ice-cream / Raspados',
    },
    {
      image:
        'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Ceviche',
      description: 'Fresh ceviche made with shrimp, lime, and cilantro.',
      price: '$10',
      categoryName: 'Refreshments',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1667993847770-822fe09f35e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pico de Gallo',
      description: 'Fresh tomato salsa with onions, cilantro, and lime.',
      price: '$2',
      categoryName: 'Tacos',
    },
    {
      image:
        'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Beef Tacos',
      description: 'Juicy beef tacos with lettuce, tomato, and cheese.',
      price: '$6',
      categoryName: 'Add-ons',
    },
    {
      image:
        'https://images.unsplash.com/photo-1542128722-d6fe34923abc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Chilaquiles',
      description: 'Crispy tortilla chips covered in green salsa and cheese.',
      price: '$7',
      categoryName: 'Burritos',
    },
  ];

  const filteredCards =
    selectedTab === 'All'
      ? cardsData
      : cardsData.filter(card => card.categoryName === selectedTab);

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  const currentCards = filteredCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className='pt-10'>
      <div className='w-[80%] mx-auto'>
        {/* SVG Icon only visible on mobile */}
        <div className='block md:hidden'>
          <button className='relative group' onClick={toggleMenu}>
            <div className='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#EC9047] ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'>
              <div
                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
                  isMenuVisible ? 'rotate-[0deg]' : ''
                }`}
              >
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isMenuVisible ? 'rotate-[42deg] w-2/3' : ''
                  } delay-150`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                    isMenuVisible ? 'translate-x-10 opacity-0' : ''
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isMenuVisible ? '-rotate-[42deg] w-2/3' : ''
                  } delay-150`}
                ></div>
              </div>
            </div>
          </button>
        </div>

        {/* Tab Menu */}
        <div
          className={`${
            isMenuVisible ? 'block' : 'hidden'
          } md:block flex flex-col md:flex-row md:justify-between w-full items-center`}
        >
          <div className='flex flex-wrap justify-between w-full text-center md:flex-nowrap md:space-x-4 mb-4 md:mb-0'>
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

        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 h-full'>
          {currentCards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              subheading={card.subheading}
              description={card.description}
              price={card.price}
              categoryName={card.categoryName}
            />
          ))}
        </div>

        <div className='flex justify-end items-center'>
          <nav aria-label='Page navigation example'>
            <ul className='inline-flex list-none -space-x-px text-base h-10'>
              <li>
                <a
                  href='#'
                  className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight rounded-s-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#282827] dark:text-white dark:hover:bg-[#EC9047] dark:hover:text-white ${
                    currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                  onClick={() =>
                    currentPage > 1 && handlePageChange(currentPage - 1)
                  }
                >
                  Previous
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <li key={page}>
                  <a
                    href='#'
                    className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${
                      currentPage === page
                        ? 'bg-[#EC9047] text-white'
                        : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-[#282827] dark:text-white dark:hover:bg-[#EC9047] dark:hover:text-white'
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href='#'
                  className={`flex items-center justify-center px-4 h-10 leading-tight rounded-e-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#282827] dark:text-white dark:hover:bg-[#EC9047] dark:hover:text-white ${
                    currentPage === totalPages
                      ? 'cursor-not-allowed opacity-50'
                      : ''
                  }`}
                  onClick={() =>
                    currentPage < totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
