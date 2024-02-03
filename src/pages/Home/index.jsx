import React from 'react';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/Header/SearchBar';
import BlogList from '../../components/Home/BlogList';
import { blogList } from '../../config/data';


const Home = () => {
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* SearchBar */} 

        <SearchBar/>

        {/* Blog List and Empty list */}
        <BlogList blogs={blogList}/>

    </div>
  );
};

export default Home;