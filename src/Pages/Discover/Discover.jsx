// file: src/pages/Discover.js
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/NavBar';

const videoList = [
  {
    id: 1,
    src: '/homevedio.mp4',
    thumbnail:
      'https://img.freepik.com/free-psd/flat-design-street-food-template_23-2149717413.jpg?w=1380&t=st=1725635125~exp=1725635725~hmac=f9d81b8cda3017c2bbc7f96adb3dc69e5b780d9b9b73de85e1ea715f55f0d907',
  },
  {
    id: 2,
    src: '/Kitchen.mp4',
    thumbnail:
      'https://img.freepik.com/free-vector/hand-drawn-recipes-youtube-thumbnail_23-2148937349.jpg?w=1380&t=st=1725635149~exp=1725635749~hmac=30d07e0678b6927fe8eb20e4d6bec5a5b365fc8caf3310d74c37d5bbe6b43e51',
  },
  {
    id: 3,
    src: '/homevedio.mp4',
    thumbnail:
      'https://img.freepik.com/free-psd/flat-design-street-food-template_23-2149717413.jpg?w=1380&t=st=1725635125~exp=1725635725~hmac=f9d81b8cda3017c2bbc7f96adb3dc69e5b780d9b9b73de85e1ea715f55f0d907',
  },
  {
    id: 4,
    src: '/Kitchen.mp4',
    thumbnail:
      'https://img.freepik.com/free-vector/hand-drawn-recipes-youtube-thumbnail_23-2148937349.jpg?w=1380&t=st=1725635149~exp=1725635749~hmac=30d07e0678b6927fe8eb20e4d6bec5a5b365fc8caf3310d74c37d5bbe6b43e51',
  },
  {
    id: 5,
    src: '/homevedio.mp4',
    thumbnail:
      'https://img.freepik.com/free-psd/flat-design-street-food-template_23-2149717413.jpg?w=1380&t=st=1725635125~exp=1725635725~hmac=f9d81b8cda3017c2bbc7f96adb3dc69e5b780d9b9b73de85e1ea715f55f0d907',
  },
  {
    id: 6,
    src: '/homevedio.mp4',
    thumbnail:
      'https://img.freepik.com/free-psd/flat-design-street-food-template_23-2149717413.jpg?w=1380&t=st=1725635125~exp=1725635725~hmac=f9d81b8cda3017c2bbc7f96adb3dc69e5b780d9b9b73de85e1ea715f55f0d907',
  },
  {
    id: 7,
    src: '/homevedio.mp4',
    thumbnail:
      'https://img.freepik.com/free-psd/flat-design-street-food-template_23-2149717413.jpg?w=1380&t=st=1725635125~exp=1725635725~hmac=f9d81b8cda3017c2bbc7f96adb3dc69e5b780d9b9b73de85e1ea715f55f0d907',
  },
  {
    id: 8,
    src: '/homevedio.mp4',
    thumbnail:
      'https://img.freepik.com/free-psd/flat-design-street-food-template_23-2149717413.jpg?w=1380&t=st=1725635125~exp=1725635725~hmac=f9d81b8cda3017c2bbc7f96adb3dc69e5b780d9b9b73de85e1ea715f55f0d907',
  },
];

const Discover = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoList[0].src);

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

      {/* Video Player */}
      <div className='w-full lg:w-[90%] mx-auto mt-10 lg:mt-24'>
        <div className='bg-[#D2D2D2] h-[300px] lg:h-[720px] w-full lg:w-[1680px] rounded-lg shadow-lg mb-12 lg:mb-32 relative'>
          <video
            className='h-full w-full rounded-lg'
            controls
            src={selectedVideo}
            autoPlay
          />
        </div>
      </div>

      {/* Video Slider */}
      <div className='bg-white py-4 lg:py-8'>
        <div className='w-full lg:w-[100%] px-10 pb-10 mx-auto overflow-x-scroll scrollbar-thin scrollbar-thumb-[#ff7b54] scrollbar-track-[#EC9047]'>
          <div className='flex space-x-4'>
            {videoList.map(video => (
              <motion.div
                key={video.id}
                className='min-w-[200px] lg:min-w-[300px] h-[150px] lg:h-[200px] rounded-lg bg-[#FFFFFF] drop-shadow-lg cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVideo(video.src)}
                animate={
                  selectedVideo === video.src
                    ? { scale: 1.1, borderColor: '#ff7b54' }
                    : {}
                }
                transition={{ duration: 0.3 }}
              >
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail ${video.id}`}
                  className='w-full h-full object-cover rounded-lg'
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className='grid grid-cols-1 my-20 lg:grid-cols-2 gap-4 px-5 lg:px-10 py-10'>
        <div className='h-[300px] lg:h-[520px] '>
          <img
            src='/public/Frame 185.png'
            alt='Grid Image 1'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <div className='h-[300px] lg:h-[720px]'>
          <img
            src='/public/Frame 187.png'
            alt='Grid Image 2'
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
