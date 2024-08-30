import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About.jsx';
import Welcome from './Pages/Welcome.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Interest' element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
