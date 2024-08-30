import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import Discover from './Pages/Discover/Discover.jsx';
import Home from './Pages/Home/Home.jsx';
import Nutrition from './Pages/Nutrition/Nutrition.jsx';
import Welcome from './Pages/Welcome/Welcome.jsx';
import Whatmakes from './Pages/Whatmakes/WhatMakes.jsx';
import { VideoProvider } from './contexts/VideoContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <VideoProvider>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/whatmakes' element={<Whatmakes />} />
          <Route path='/Discover' element={<Discover />} />
          <Route path='/Nutrition' element={<Nutrition />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
      </VideoProvider>
    </BrowserRouter>
  );
}

export default App;
