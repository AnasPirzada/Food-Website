import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/NavBar';

const ContactUs = () => {
  return (
    <>
      <Navbar backgroundcolor='#000000' />
      <div className='flex flex-col items-center justify-between min-h-screen px-4 md:px-10 lg:px-20 bg-gray-100'>
        <div className='bg-white mt-52 shadow-md rounded-lg overflow-hidden w-full max-w-6xl flex-grow'>
          <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[450px] lg:min-h-[600px]'>
            <div className='py-8 px-6 md:px-10 lg:px-16 flex flex-col justify-center'>
              <h2 className='text-2xl lg:text-3xl font-bold text-orange-600 mb-6'>
                Contact Us
              </h2>
              <form className='space-y-4'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='w-full p-3 bg-[#F5F5F5] rounded'
                />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    type='text'
                    placeholder='Transport Type'
                    className='w-full p-3 bg-[#F5F5F5] rounded'
                  />
                  <input
                    type='text'
                    placeholder='Subject'
                    className='w-full p-3 bg-[#F5F5F5] rounded'
                  />
                </div>
                <textarea
                  placeholder='Message'
                  rows='5'
                  className='w-full p-3 bg-[#F5F5F5] rounded'
                ></textarea>
                <br />
                <button
                  type='submit'
                  className='w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600'
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className='hidden lg:flex items-center justify-center'>
              <img
                src='/map.png'
                alt='Map'
                className='w-full h-full object-cover lg:w-[600px] '
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between w-full my-8 lg:my-12 space-y-4 lg:space-y-0 lg:space-x-4'>
          <div className='flex items-center space-x-2'>
            <div className='bg-orange-500 w-[64px] h-[64px] lg:w-[88px] lg:h-[88px] flex justify-center items-center p-2 rounded-full text-white'>
              <img src='/ic_round-call.svg' alt='Phone' />
            </div>
            <div>
              <h4 className='text-[#181919] text-[18px] lg:text-[20px] Gilroy-SemiBold'>
                Phone Number
              </h4>
              <p className='text-[#383939] text-[16px] lg:text-[18px] Gilroy-Regular'>
                031548855642
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='bg-orange-500 w-[64px] h-[64px] lg:w-[88px] lg:h-[88px] flex justify-center items-center p-2 rounded-full text-white'>
              <img src='/tabler_mail-filled.svg' alt='Email' />
            </div>
            <div>
              <h4 className='text-[#181919] text-[18px] lg:text-[20px] Gilroy-SemiBold'>
                Email Address
              </h4>
              <p className='text-[#383939] text-[16px] lg:text-[18px] Gilroy-Regular'>
                tncandfamily@gmail.com
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='bg-orange-500 w-[64px] h-[64px] lg:w-[88px] lg:h-[88px] flex justify-center items-center p-2 rounded-full text-white'>
              <img src='/mdi_address-marker.svg' alt='Address' />
            </div>
            <div>
              <h4 className='text-[#181919] text-[18px] lg:text-[20px] Gilroy-SemiBold'>
                Our Address
              </h4>
              <p className='text-[#383939] text-[16px] lg:text-[18px] Gilroy-Regular'>
                15815 NE 18th Street, Vancouver,
                <br /> WA 98684, USA
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
