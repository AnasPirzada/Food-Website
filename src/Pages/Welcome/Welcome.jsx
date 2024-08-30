import React, { useEffect, useRef, useState } from 'react';

export const Welcome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    // Add event listener to the whole document body
    document.body.addEventListener('click', handlePlayVideo);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handlePlayVideo);
    };
  }, [isPlaying]);
  return (
    <div>
      <div className='relative w-full h-screen overflow-hidden'>
        {/* Video background */}
        <video
          ref={videoRef}
          className='absolute top-0 left-0 w-full h-full object-cover opacity-50 transition-opacity duration-500'
          src={`/homevedio.mp4`}
          loop
          muted={!isPlaying}
        ></video>

        {/* Overlay text */}
        <div className='relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
          <h1 className='text-3xl font-bold text-white'>
            Hello world! Click anywhere to Play Video
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
