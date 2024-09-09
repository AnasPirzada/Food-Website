import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/NavBar';

const videoList = [
  {
    id: 1,
    src: '/Burritos.mp4',
    poster: '/Burritosvediothum.png', // Path to the video thumbnail image
    isYouTube: false,
  },
  {
    id: 2,
    src: '/Tacos.mp4',
    poster: '/whatsapp-thumbnail.png',
    isYouTube: false,
  },
  {
    id: 3,
    src: '/public/WhatsApp Video 2024-09-09 at 15.40.06_b10472d3.mp4',
    poster: '/tacos-thumbnail.png',
    isYouTube: false,
  },
  {
    id: 5,
    src: 'https://www.youtube.com/watch?v=Zng2mCdjyxE',
    poster: 'https://img.youtube.com/vi/Zng2mCdjyxE/0.jpg', // YouTube thumbnail
    isYouTube: true,
  },
];

const Discover = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlayVideo = video => {
    setPlayingVideo(video.id === playingVideo?.id ? null : video);
  };

  return (
    <div className='relative w-full h-screen overflow-auto'>
      {/* Navbar */}
      <Navbar backgroundcolor='#000000' />

      {/* Hero Section */}
      <div className="bg-[url('/imagedicover.png')] h-[800px]">
        <p className='text-white z-10 text-center pt-72 Gilroy-Regular text-5xl lg:text-8xl font-bold'>
          Discover more
        </p>
      </div>

      {/* Video Cards */}
      <div className='bg-white py-4 lg:py-8'>
        <div className='grid grid-cols-1 my-20 lg:grid-cols-2  px-5 py-10 pb-10 gap-6'>
          {videoList.map(video => (
            <motion.div
              key={video.id}
              className='min-w-[200px] lg:min-w-[300px] h-[250px] lg:h-[300px] rounded-lg bg-[#FFFFFF] drop-shadow-lg cursor-pointer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePlayVideo(video)}
              transition={{ duration: 0.3 }}
            >
              {playingVideo?.id === video.id ? (
                video.isYouTube ? (
                  <ReactPlayer
                    url={video.src}
                    playing
                    controls
                    width='100%'
                    height='100%'
                  />
                ) : (
                  <video
                    src={video.src}
                    className='w-full h-full object-cover rounded-lg'
                    controls
                    autoPlay
                  />
                )
              ) : (
                <img
                  src={video.poster}
                  alt='Video thumbnail'
                  className='w-full h-full object-cover rounded-lg'
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive Image Grid */}
      <div className='grid grid-cols-1 my-20 lg:grid-cols-3 lg:gap-4 gap-10 px-5 py-10'>
        <div className='h-full lg:h-[520px] shadow-lg rounded-lg'>
          <img
            src='/Frame 185.png'
            alt='Grid Image 1'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <div className='h-full lg:h-[520px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
          <img
            src='/discovercard.jpg'
            alt='Grid Image 2'
            className='w-full h-full object-cover rounded-lg'
          />
          <p className='py-6 text-black Gilroy-Regular font-bold text-xl'>
            Tacos n’ Cream touts healthful, lower-fat options
          </p>
          <Link to='https://www.columbian.com/news/2015/feb/05/tacos-n-cream-food-truck-vancouver/'>
            <p className='pb-6 text-[#EC9047] text-lg cursor-pointer Gilroy-Regular font-normal'>
              Read More
            </p>
          </Link>
        </div>
        <div className='h-full lg:h-[520px] shadow-lg rounded-lg'>
          <img
            src='/Frame 187.png'
            alt='Grid Image 3'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Discover;
