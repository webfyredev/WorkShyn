import { useState } from 'react'
import Home from './pages/home'
import About from './pages/about';
import Services from './pages/services';
import BlogPage from './pages/blog';
import PricingPage from './pages/pricings';
import Contacts from './pages/contacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageToTop from './components/pageTop';

function App (){
  return(
      <Router>
        <PageToTop />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/blogs" element={<BlogPage />}></Route>
          <Route path="/pricing" element={<PricingPage />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
