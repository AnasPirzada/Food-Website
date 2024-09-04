import React from 'react';

function Footer() {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-4'>
        {/* Top Section */}
        <div className='grid lg:grid-cols-12 gap-8 p-8'>
          <div className='lg:col-span-5 sm:col-span-12'>
            <div className='w-full'>
              <h2 className='text-xl font-bold mb-2'>
                <img src='/Food-logo.svg' alt='' />
              </h2>
              <p className='text-sm w-full'>
                Loryum Silmarillion is an account of the Elder Days, of the
                First Age of Tolkien's world. It is the ancient drama to which
                the characters in The Lord of the Rings to Lorpancient drama to
                which the characters in The Lord of the Rings to Lorp.
              </p>
            </div>
          </div>
          <div className='lg:col-span-7 sm:col-span-12'>
            <div className='grid grid-cols-1 mt-14 md:grid-cols-3 gap-6 text-center md:text-left'>
              <div>
                <h3 className='font-normal text-white text-2xl'>Fall/Winter</h3>
                <p className='mt-4 text-gray-400 text-lg'>Monday - Thursday</p>
                <p className='text-orange-500 text-lg'>Time: 11am-6pm</p>
                <p className='mt-4 text-gray-400 text-lg'>Friday - Saturday</p>
                <p className='text-orange-500 text-lg'>Time: 11am-7pm</p>
              </div>
              <div>
                <h3 className='font-normal text-white text-2xl'>
                  Spring/Summer
                </h3>
                <p className='mt-4 text-gray-400 text-lg'>Monday - Thursday</p>
                <p className='text-orange-500 text-lg'>Time: 11am-6pm</p>
                <p className='mt-4 text-gray-400 text-lg'>Friday - Saturday</p>
                <p className='text-orange-500 text-lg'>Time: 11am-7pm</p>
              </div>
              <div>
                <h3 className='font-normal text-white text-2xl'>
                  Holidays Observed
                </h3>
                <p className='mt-4 text-gray-400 text-lg'>Monday - Thursday</p>
                <p className='text-orange-500 text-lg'>Time: 11am-6pm</p>
                <p className='mt-4 text-gray-400 text-lg'>Friday - Saturday</p>
                <p className='text-orange-500 text-lg'>Time: 11am-7pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <img src='/Line 800.svg' alt='' className='w-full' />
        </div>
        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-left'>
          <p className='text-sm'>
            Copyright © 2024 tacos n’ cream. All Rights Reserved
          </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='#' aria-label='Facebook'>
              <img src='/facebook.svg' alt='' />
            </a>
            <a href='#' aria-label='Instagram'>
              <img src='/youtube_220353 1.svg' alt='' />
            </a>
            <a href='#' aria-label='YouTube'>
              <img src='/communication_15047584 1.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
