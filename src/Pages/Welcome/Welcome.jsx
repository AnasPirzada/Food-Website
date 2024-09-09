// src/pages/Welcome.js
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useVideo } from '../../contexts/VideoContext.jsx';

export const Welcome = () => {
  const { handlePlayVideo } = useVideo();
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = e => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      if (spanRef.current) {
        spanRef.current.animate({ left }, { duration: 250, fill: 'forwards' });
      }
    };

    const handleMouseLeave = () => {
      if (spanRef.current) {
        spanRef.current.animate(
          { left: '50%' },
          { duration: 100, fill: 'forwards' }
        );
      }
    };

    const btnElement = btnRef.current;
    if (btnElement) {
      btnElement.addEventListener('mousemove', handleMouseMove);
      btnElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (btnElement) {
        btnElement.removeEventListener('mousemove', handleMouseMove);
        btnElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div>
      <div className='relative w-full h-screen overflow-hidden'>
        <video
          className='absolute top-0 left-0 w-full h-full object-cover  transition-opacity duration-500'
          src={`/homevedio.mp4`}
          loop
          muted
          playsInline
          autoPlay
        ></video>

        <div className="bg-[url('/blurybg.png')] relative z-10 flex flex-col items-center justify-center w-full h-full bg-opacity-50">
          <div>
            <h1 className=' text-5xl lg:text-8xl font-bold Gilroy-Bold text-white lowercase'>
              welcome home{' '}
            </h1>
          </div>
          <div className='my-10'>
            <img src='/Food-logo.svg' className='w-[30vw]' alt='' />
          </div>

          <div>
            <Link onClick={handlePlayVideo} to='/Home'>
              <motion.button
                whileTap={{ scale: 0.985 }}
                ref={btnRef}
                className='relative w-full max-w-xs overflow-hidden border-2 border-[#EC9047CC] rounded-full bg-transparent drop-shadow-[0px_2px_24px_0px_#00000040] px-6 py-2 Gilroy-Regular font-normal text-3xl mt-16 md:mt-0 text-white group transition-colors duration-300 ease-in-out'
              >
                Get started
                <span
                  ref={spanRef}
                  className='pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-[#EC9047CC] group-hover:bg-[#EC9047CC] transition-colors duration-300 ease-in-out'
                />
                <span className='group-hover-text absolute inset-0 flex items-center justify-center'>
                  Get started
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
