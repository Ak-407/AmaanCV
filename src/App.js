import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './home';
import About from './About';
import Contact from './components/contact'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
