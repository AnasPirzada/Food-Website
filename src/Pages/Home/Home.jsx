// src/pages/Home.js
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Navbar from '../../Components/NavBar';
import { useVideo } from '../../contexts/VideoContext.jsx';

const Home = () => {
  const videoRef = useRef(null);
  const { shouldPlayVideo } = useVideo();

  useEffect(() => {
    const videoElement = videoRef.current;
    if (shouldPlayVideo && videoElement) {
      videoElement.muted = false;
      videoElement.play().catch(error => {
        console.error('Video playback failed:', error);
        videoElement.muted = true;
        videoElement
          .play()
          .catch(err => console.error('Muted video playback failed:', err));
      });
    }
  }, [shouldPlayVideo]);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <video
        ref={videoRef}
        className='absolute top-0 left-0 w-full h-full object-cover opacity-50 transition-opacity duration-500 bg-black'
        src={`/homevedio.mp4`}
        loop
        muted={false}
      >
        Your browser does not support the video tag.
      </video>

      <div className='relative z-10 flex flex-col items-center justify-center w-full h-full '>
        <Navbar />

        <motion.p
          className='Gilroy-Black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#FFFFFF] mt-10 sm:mt-20 md:mt-28 lg:mt-40'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          where's the grease?
        </motion.p>

        <motion.p
          className='Gilroy-Regular font-normal text-lg text-[#FFFFFF] leading-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full sm:w-3/4 md:w-2/3 lg:w-[65%]  text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          Discover the ultimate taco experience with our fresh and nutritious
          ingredients. Savor every bite, knowing each taco is crafted with the
          highest quality, chemical-free meat and bursting with vibrant, locally
          sourced flavors.
        </motion.p>

        <motion.img
          src='/Menubtn.svg'
          className='cursor-pointer mt-10 sm:mt-16 md:mt-20 lg:mt-24 w-32 sm:w-40 md:w-48 lg:w-56'
          alt='Menu Button'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </div>
  );
};

export default Home;
