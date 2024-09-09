// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { VideoProvider } from './contexts/VideoContext.jsx';

// Pages Import
import About from './Pages/About/About.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import Discover from './Pages/Discover/Discover.jsx';
import Home from './Pages/Home/Home.jsx';
import JointFamilia from './Pages/JointFamilia/JointFamilia.jsx';
import Nutrition from './Pages/Nutrition/Nutrition.jsx';
import Submenu from './Pages/SubMenus/Submenu.jsx'; // Dynamic Submenu
import Welcome from './Pages/Welcome/Welcome.jsx';
import Whatmakes from './Pages/Whatmakes/WhatMakes.jsx';

function App() {
  return (
    <Router>
      <VideoProvider>
        <Routes>
          {/* Static Routes */}
          <Route path='/' element={<Welcome />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/whatmakes' element={<Whatmakes />} />
          <Route path='/Discover' element={<Discover />} />
          <Route path='/Nutrition' element={<Nutrition />} />
          <Route path='/Contactus' element={<ContactUs />} />
          <Route path='/JointFamilia' element={<JointFamilia />} />

          {/* Dynamic Submenu Route */}
          <Route path='/submenu/:menuName' element={<Submenu />} />
        </Routes>
      </VideoProvider>
    </Router>
  );
}

export default App;
