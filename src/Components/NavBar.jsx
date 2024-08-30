import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  const isActive = path => location.pathname === path;

  return (
    <nav className='fixed w-[95%] custom-border top-0 z-10 flex justify-between mx-auto py-2 md:ps-10 ps-2'>
      <div className='text-center '>
        <Link to='/'>
          {/* <p className='text-sm '>LOGO</p> */}
          <img src='/Food-logo.svg' alt='' className='' />
        </Link>
      </div>

      <div
        className={`hamburger ${isOpen ? 'toggle' : ''}`}
        onClick={toggleNav}
      >
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
      <div
        className={`nav-links px-0 w-[60%] py-0.7vw w-100 pe-0 md:pe-10 flex list-none justify-between sm:justify-normal items-center uppercase ${
          isOpen ? 'open' : ''
        }`}
      >
        <ul className='flex justify-between text-nowrap list-none	'>
          <div className='flex flex-col  items-center text-sm lg:flex-row justify-evenly md:flex-row xl:flex-row'>
            <Link to='/Home'>
              <li
                className={`text-[14px] font-normal ${
                  isActive('/Home')
                    ? 'Gilroy-Regular text-[#EC9047]'
                    : 'Gilroy-Regular text-[#FFFFFF]'
                }`}
              >
                Home
              </li>
            </Link>
            <Link to='/whatmakes'>
              <li
                className={`mx-0 md:mx-10 font-normal text-[14px] ${
                  isActive('/whatmakes')
                    ? 'Gilroy-Regular text-[#EC9047]'
                    : 'Gilroy-Regular text-[#FFFFFF]'
                }`}
              >
                what makes us different{' '}
              </li>
            </Link>
            <Link to='/Discover'>
              <li
                className={`text-[14px] font-normal${
                  isActive('/Discover')
                    ? 'Gilroy-Regular text-[#EC9047]'
                    : 'Gilroy-Regular text-[#FFFFFF]'
                }`}
              >
                Discover more
              </li>
            </Link>
            <Link to='/Nutrition'>
              <li
                className={`mx-0 md:mx-10 text-[14px] font-normal${
                  isActive('/Nutrition')
                    ? 'Gilroy-Regular text-[#EC9047]'
                    : 'Gilroy-Regular text-[#FFFFFF]'
                }`}
              >
                Nutrition
              </li>
            </Link>
            <Link to='/ContactUs'>
              <li className='me-10'>
                <button className='border-0 rounded-full	font-custom bg-[#EC9047] py-1 px-10'>
                  Contact Us
                </button>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
