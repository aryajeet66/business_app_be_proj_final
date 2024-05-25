import React, { useState } from 'react';
import Header from './Header';
import Cta from './Cta';
import Footer from './Footer';
import APIpostcode from './API_postcode';
import GetRestaurants from './GetRestaurants';


function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const handleSearchInputChange = (inputValue) => {
    setSearchInput(inputValue);
  };
  return (
    <div className="">
      <Header onSearchInputChange={handleSearchInputChange} />
      <Cta />
      <APIpostcode
        searchLocation={searchInput}
        setCoordinatesCallback={setCoordinates}
      />
      <GetRestaurants coordinates={coordinates} />
      <Footer />
    </div>
  );
}

export default Home;