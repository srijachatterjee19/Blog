import React from 'react';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/Header/SearchBar';


const Home = () => {
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* SearchBar */}

        <SearchBar/>

        {/* Blog List and Empty list */}
    </div>
  );
};

export default Home;