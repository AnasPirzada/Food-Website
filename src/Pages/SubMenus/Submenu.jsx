import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const mediaMap = {
  Tacos: { type: 'video', src: '/Tacos.mp4' },
  Burritos: { type: 'video', src: '/Burritos.mp4' },
  IceCream: { type: 'image', src: '/icecream.jpg' },
  Refreshments: { type: 'image', src: '/Refreshmentsmenu.jpg' },
  Addons: {
    type: 'video',
    src: '/WhatsApp Video 2024-09-09 at 15.41.12_4ed02c18.mp4',
  },
};

const cardsData = [
  {
    image: '/Moo Moo.png',
    title: 'moo-moo® combo plate (flank/flap/skirt)',
    // subheading: 'Combo Plate ( flank/flap/skirt)',
    description:
      'perfectly marinated CARNE ASADA and 4 LARGE SIZE soft corn tortillas, homemade creamy style smoke-flavored black beans and abuelita (grandma) style rice. All served on the side.',
    price: '$22.99',
    categoryName: 'Tacos',
  },
  // {
  //   image: 'Moo Moo 2.png',
  //   title: 'cluck-cluck® combo plate (breast)',
  //   // subheading: 'Combo Plate ( flank/flap/skirt)',

  //   description:
  //     'perfectly marinated CARNE ASADA and 4 LARGE SIZE soft corn tortillas, homemade creamy style smoke-flavored black beans and abuelita (grandma) style rice. All served on the side.',
  //   price: '$21.99',
  //   categoryName: 'Tacos',
  // },
  {
    image: '/lacart.png',
    title: 'moo-moo® a la carte (flank/flap/skirt)',
    // subheading: 'Combo Plate ( flank/flap/skirt)',

    description:
      'perfectly marinated CARNE ASADA served with 4 LARGE SIZE soft corn tortillas served on the side.',
    price: '$19.99',
    categoryName: 'Tacos',
  },
  // {
  //   image: 'lacart2.png',
  //   title: 'cluck-cluck® a la carte (breast)',
  //   // subheading: 'Combo Plate ( flank/flap/skirt)',

  //   description:
  //     'perfectly marinated GRILLED CHICKEN served with 4 LARGE SIZE soft corn tortillas served on the side.',
  //   price: '$18.99',
  //   categoryName: 'Tacos',
  // },
  {
    image: '/IT-moo.png',
    title: 'it® moo-moo® (flank, flap, skirt)',
    description:
      'perfectly marinated CARNE ASADA with melted pepper-jack cheese, homemade creamy style smoke-flavored black beans and abuelita (grandma) style rice. All wrapped in a grilled flour tortilla.',
    price: '$19.99',
    categoryName: 'Burritos',
  },
  {
    image: '/dscsdcs.jpg',
    title: 'it® cluck-cluck® (breast)',
    description:
      'perfectly marinated GRILLED CHICKEN with melted pepper-jack cheese, homemade creamy style smoke-flavored black beans and abuelita (grandma) style rice. All wrapped in a grilled flour tortilla',
    price: '$18.99',
    categoryName: 'Burritos',
  },
  {
    image: '/smokyveg.png',
    title: "'smoky® vegetarian / vegan . 'u don't miss the meat'®'",
    description:
      'homemade creamy style smoke-flavored black beans, abuelita (grandma) style rice, with/without melted pepper-jack cheese, sauteed onions. All wrapped in a grilled flour tortilla.',
    price: '$13.99',
    categoryName: 'Burritos',
  },
  {
    image: '/blackbeans.png',
    title: "smoky® black beans . . . . . 'never-from-a-can'®",
    description: 'homemade creamy style smoke-flavored black beans',
    price: '$4.99',
    categoryName: 'Addons',
  },
  {
    image: '/stylerice.png',
    title: "abuelita (grandma) style rice. 'abuelita's secret'",
    description:
      "prepared with onions, garlic and perfectly seasoned with our proprietary tn'c seasoning",
    price: '$3.99',
    categoryName: 'Addons',
  },
  {
    image: '/guacamole.png',
    title: 'guacamole',
    description:
      "creamy style avocados with garlic, herbs, tn'c seasoning and with a slight kick added!",
    price: '$4.39',
    categoryName: 'Addons',
  },
  // {
  //   image: '/chef’s pico.png',
  //   title: 'chef’s pico',
  //   description:
  //     "rainbow of bell peppers, tomatos, onion, mango, cucumber, cilantro, citrus and tn'c seasoning all toss together with a slight kick!",
  //   price: '$3.99',
  //   categoryName: 'Addons',
  // },
  {
    image: '/Chips.png',
    title: 'chips',
    description: '',
    price: '$3.99',
    categoryName: 'Addons',
  },
  // {
  //   // image: '/Chips.png',
  //   title: 'corn tortillas (2x)',
  //   description:
  //     'large size soft corn tortillas (note: approximately twice the size of little street tacos tortillas)',
  //   price: '$1.09',
  //   categoryName: 'Addons',
  // },
  // {
  //   // image: '/Chips.png',
  //   title: 'Sour cream',
  //   // description:
  //   //   'large size soft corn tortillas (note: approximately twice the size of little street tacos tortillas)',
  //   price: '$1.99',
  //   categoryName: 'Addons',
  // },
  // {
  //   // image: '/Chips.png',
  //   title: 'pepper-jack cheese',
  //   // description:
  //   //   'large size soft corn tortillas (note: approximately twice the size of little street tacos tortillas)',
  //   price: '$1.99',
  //   categoryName: 'Addons',
  // },

  {
    image: "/tn'c.png",
    title: "tn'c natural fruit ice cream",
    description:
      '2 scoops of either: gelato style (cream base) / sorbet style (non-cream)',
    subheading: ' cardmember only avocado/ube/specialties . . Price: varies',
    price: '$6.99',
    categoryName: 'IceCream',
  },
  {
    image: '/raspados.png',
    title: 'homemade natural fruit flavors',
    // description:
    //   '2 scoops of either: gelato style (cream base) / sorbet style (non-cream)',
    // subheading: ' cardmember only avocado/ube/specialties . . Price: varies',
    price: '$6.99',
    categoryName: 'IceCream',
  },
  {
    image: '/nutty wutty.png',
    title: "nutty wutty® . 'chew your drink'®",
    description:
      '- homemade dairy base horchata with nuts, coconut and so much more! - seasonal',
    price: '$5.99',
    categoryName: 'Refreshments',
  },
  {
    image: '/jamangotrus.png',
    title: 'jamangotrus®. (pronounced: ha-mango-tris)',
    description:
      '- homemade hibiscus flower, mango, pineapple, assortment of citruses, cinnamon and so much more! - seasonal',
    price: '$5.99',
    categoryName: 'Refreshments',
  },
  {
    image: '/champurrado.png',
    title: "champurrado. (mexican 'chocolate' classic)",
    description:
      "- homemade 'hot' dairy base chocolate drink with corn meal, pondillo, cinnamon and so much more! - seasonal",
    price: '$5.99',
    categoryName: 'Refreshments',
  },
  {
    image: '/watter.png',
    title: 'h2o (water)',
    // description:
    //   "- homemade 'hot' dairy base chocolate drink with corn meal, pondillo, cinnamon and so much more! - seasonal",
    price: '$1.35',
    categoryName: 'Refreshments',
  },
  {
    image: '/san.png',
    title: 'san pellegrino',
    description: '- lemon',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
  {
    image: '/san-bloodorange.png',
    title: 'san pellegrino',
    description: '- blood orange',
    price: '$2.75',
    categoryName: 'Refreshments',
  },
];

const Submenu = () => {
  const { menuName } = useParams(); // Extract menu name from the route
  const videoRef = useRef(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Filter cards based on the menuName
    const cardsForMenu = cardsData.filter(
      card => card.categoryName === menuName
    );
    setFilteredCards(cardsForMenu);

    // Scroll to the top or hero section when the page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [menuName]);

  useEffect(() => {
    // Filter cards based on the menuName
    const cardsForMenu = cardsData.filter(
      card => card.categoryName === menuName
    );
    setFilteredCards(cardsForMenu);
  }, [menuName]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  const currentCards = filteredCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);

    // Scroll to the top after changing the page
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const media = mediaMap[menuName]; // Get the media type and source based on the menu

  return (
    <div>
      <div className='relative w-full h-[40vh]'>
        {media.type === 'video' ? (
          <video
            ref={videoRef}
            className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 bg-black'
            src={media.src}
            loop
            muted={false}
            playsInline
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className='absolute top-0 left-0 w-full h-full object-cover'
            src={media.src}
            alt={menuName}
          />
        )}
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold mb-10 text-[#EC9047] Gilroy-Regular text-nowrap'>
          {menuName}
        </h1>
      </div>

      <div className='relative z-10 p-4 md:p-10 bg-white'>
        {/* Display Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {currentCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full hover:border-dashed hover:border hover:border-[#EC9047] cursor-pointer bg-gray-100 p-4 border rounded-lg shadow-md'
            >
              <div className='w-[286px] h-[392px] mx-auto md:w-[366px] md:h-[462px] rounded-lg flex justify-center items-center'>
                <img
                  className='object-contain h-full w-full'
                  src={card.image}
                  alt={card.title}
                />
              </div>

              <div className='py-6 px-6'>
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex flex-col justify-start items-start'>
                    <h2 className='text-xl text-[#212121] Gilroy-SemiBold font-normal'>
                      {card.title}
                    </h2>
                    {card.subheading && (
                      <p className='Gilroy-Regular text-[14px] text-[#212121]'>
                        {card.subheading}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className='text-xl font-normal text-[23.88px] text-[#212121] Gilroy-SemiBold'>
                      {card.price}
                    </span>
                  </div>
                </div>

                <p className='text-sm text-[#212121] font-light Gilroy-Light mb-4'>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-end items-center mt-10'>
          <ul className='inline-flex list-none -space-x-px text-base h-10'>
            <li>
              <a
                href='#'
                className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight rounded-s-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-[#282827] dark:text-white dark:hover:bg-[#EC9047] dark:hover:text-white ${
                  currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
                }`}
                onClick={e =>
                  currentPage > 1 && handlePageChange(e, currentPage - 1)
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
                  onClick={e => handlePageChange(e, page)}
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
                onClick={e =>
                  currentPage < totalPages &&
                  handlePageChange(e, currentPage + 1)
                }
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
