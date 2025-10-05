import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import OberstSnuggles from "./pages/OberstSnuggles.jsx";
import Coinflip from "./pages/Coinflip.jsx";
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Home/> } />
        <Route path= "/games" element= {<Games/> } />
        <Route path= "/OberstSnuggles" element= {<OberstSnuggles/> } />
        <Route path= "/Coinflip" element = {<Coinflip/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
