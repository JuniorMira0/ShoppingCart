import React from 'react';
import Header from '../components/NavBar/Header';
import ProductContainer from '../components/ProductContainer';

function Home() {
  return (
    <div className="home">
      <Header />
      <ProductContainer />
    </div>
  );
}

export default Home;
