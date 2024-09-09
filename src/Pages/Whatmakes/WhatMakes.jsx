import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer.jsx';
import Navbar from '../../Components/NavBar.jsx';
const Whatmakes = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      /* Firefox */
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      /* IE/Edge */
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <div>
      <div className='relative pt-24 w-full h-screen overflow-auto'>
        <Navbar backgroundcolor='#000000 ' />
        <div className=' w-full lg:w-[90%] mx-auto mt-24'>
          <div className='grid lg:grid-cols-12 sm:grid-cols-1 gap-4 p-8'>
            <div className='lg:col-span-6 sm:col-span-12'>
              <h1 className='text-3xl font-bold mb-4'>
                Unparalleled Taste with Our Unique
                <br /> Marination Process
              </h1>
              <div className='flex justify-start items-center space-x-4 mb-8'>
                <Link to='/Contactus'>
                  <button className='bg-orange-500 Gilroy-SemiBold text-[20px] hover:bg-orange-600 text-white font-normal py-2 px-4 rounded-full'>
                    Contact Us
                  </button>
                </Link>
                <Link
                  to='/Home#menu'
                  className='text-[#191918] hover:text-[#EC9047] Gilroy-Regular hover:underline font-normal text-[20px]'
                >
                  View menu &gt;
                </Link>
              </div>
            </div>
            <div className='lg:col-span-6 sm:col-span-12'>
              <p className='text-[#454544] text-[24px] Gilroy-Regular pt-10 mb-8'>
                At Tacosn’ Cream, our unique marination process creates
                delicious, low-grease dishes using the freshest ingredients.
                Enjoy a healthy, memorable dining experience with exceptional
                service and a focus on sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Video player with design */}
        <div className='flex justify-center items-center -mb-40 mt-32'>
          <div className='bg-[#D2D2D2] flex flex-col justify-center items-center drop-shadow-[0px 8px 40px 0px #0000001F] border border-transparent w-[70%] h-[320px] rounded-lg'>
            <video
              ref={videoRef}
              className='w-full h-[320px] rounded-lg'
              controls
            >
              <source src='/Kitchen.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <div className='flex justify-center space-x-4 mt-4'>
              <button
                onClick={handlePlay}
                className='bg-green-500 text-white py-2 px-4 rounded-lg'
              >
                Play
              </button>
              <button
                onClick={handlePause}
                className='bg-red-500 text-white py-2 px-4 rounded-lg'
              >
                Pause
              </button>
              <button
                onClick={handleFullscreen}
                className='bg-blue-500 text-white py-2 px-4 rounded-lg'
              >
                Fullscreen
              </button>
            </div> */}
          </div>
        </div>
        {/* End */}

        <div className='bg-[#EC9047] w-full h-[250px]'></div>
        <Footer />
      </div>
    </div>
  );
};

export default Whatmakes;
