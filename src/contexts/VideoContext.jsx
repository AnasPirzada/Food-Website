// src/contexts/VideoContext.js
import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    setShouldPlayVideo(true);
  };

  return (
    <VideoContext.Provider value={{ shouldPlayVideo, handlePlayVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
