import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer.jsx';
import MenuSection from '../../Components/MenuSection.jsx';
import Navbar from '../../Components/NavBar';
import { useVideo } from '../../contexts/VideoContext.jsx';

const Home = () => {
  const videoRef = useRef(null);
  const menuRef = useRef(null);
  const topSectionRef = useRef(null);
  const { shouldPlayVideo, setShouldPlayVideo } = useVideo();
  const [isScrolling, setIsScrolling] = useState(false);
  const [navbarBg, setNavbarBg] = useState('');
  const location = useLocation(); // <-- Use the useLocation hook

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
    } else if (!shouldPlayVideo && videoElement) {
      videoElement.pause();
    }
  }, [shouldPlayVideo]);

  useEffect(() => {
    if (location.hash === '#menu' && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
      setNavbarBg('#000000'); // Set navbar to black on menu click
    }
  }, [location]);

  const handleScrollToMenu = () => {
    setShouldPlayVideo(false);
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
      setNavbarBg('#000000'); // Set navbar to black on menu click
    }
  };

  const handleScrollToTop = () => {
    if (topSectionRef.current) {
      topSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setNavbarBg('transparent'); // Set navbar to transparent when scrolling to the top
    }
  };

  const handleWheelScroll = event => {
    if (isScrolling) return;

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);

    const deltaY = event.deltaY;

    if (
      deltaY > 0 &&
      topSectionRef.current?.getBoundingClientRect().bottom > 0
    ) {
      handleScrollToMenu();
    } else if (
      deltaY < 0 &&
      menuRef.current?.getBoundingClientRect().top < window.innerHeight
    ) {
      handleScrollToTop();
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheelScroll);

    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShouldPlayVideo(true);
        } else {
          setShouldPlayVideo(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (topSectionRef.current) {
      observer.observe(topSectionRef.current);
    }

    return () => {
      if (topSectionRef.current) {
        observer.unobserve(topSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const menuTop = menuRef.current.getBoundingClientRect().top;
        if (menuTop <= 0) {
          setNavbarBg('#000000'); // Set navbar to black when menu section is in view
        } else {
          setNavbarBg('transparent'); // Set navbar to transparent when not in menu section
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar backgroundcolor={navbarBg} />
      <div className='relative w-full h-screen '>
        <div ref={topSectionRef} className='w-full h-screen overflow-auto'>
          <video
            ref={videoRef}
            className='absolute top-0 left-0 w-full h-full object-cover  transition-opacity duration-500 bg-black'
            src={`/homevedio.mp4`}
            loop
            muted={false}
            playsInline
            autoPlay
          >
            Your browser does not support the video tag.
          </video>

          <div className='relative z-10 flex flex-col items-center justify-center w-full h-full'>
            <motion.p
              className='Gilroy-Black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#FFFFFF] mt-10 sm:mt-20 md:mt-28 lg:mt-40'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              where's the greas
              <span className='relative'>
                e<span className='absolute text-xl left-4 -top-0'>Ⓡ</span>
              </span>{' '}
              &nbsp; ?
            </motion.p>

            {/* <motion.p
              className='Gilroy-Regular font-normal text-lg text-[#FFFFFF] leading-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full sm:w-3/4 md:w-2/3 lg:w-[65%] text-center'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
              Discover the ultimate taco experience with our fresh and
              nutritious ingredients. Savor every bite, knowing each taco is
              crafted with the highest quality, chemical-free meat and bursting
              with vibrant, locally sourced flavors.
            </motion.p> */}

            <motion.img
              src='/Menubtn.svg'
              className='cursor-pointer mt-10 sm:mt-16 md:mt-20 lg:mt-24 w-32 sm:w-40 md:w-48 lg:w-56'
              alt='Menu Button'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              onClick={handleScrollToMenu}
            />
          </div>
        </div>

        <div
          ref={menuRef}
          className='w-full mb-32 overflow-auto bg-[#FFFFFF]  text-black'
        >
          <div>
            <MenuSection />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
