import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';

function Switcher() {
  return (
    <Routes>
      <Route path="/checkout" element={<Checkout />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Switcher;
