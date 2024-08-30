import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './fonts/Gilroy-Bold.ttf';
import './fonts/Gilroy-ExtraBold.ttf';
import './fonts/Gilroy-Light.ttf';
import './fonts/Gilroy-Medium.ttf';
import './fonts/Gilroy-Regular.ttf';
import './fonts/Gilroy-SemiBold.ttf';
import './fonts/Gilroy-Thin.ttf';
import './index.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
