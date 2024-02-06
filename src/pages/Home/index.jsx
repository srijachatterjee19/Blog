import React from 'react';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/Header/SearchBar';
import BlogList from '../../components/Home/BlogList';
import EmptyList from '../../components/common/EmptyList';
import { blogList } from '../../config/data';
import { useState } from 'react';


const Home = () => {
  //initialise with all blog items
  const [blogs,setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  //search form submit
  const handleSearchSubmit = (event) =>{
    event.preventDefault();//stop from submitting form by default
    handleSeachResults();
  }
  // Search blogs by category
  const handleSeachResults = () =>{
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) => 
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  }
  // set blogs to the original state and set search key to an empty string when user clicks cross button
  const handleClearSearch = () =>{
    setBlogs(blogList);
    setSearchKey('');
  }


  return (
    <div>
        {/* Header */}
        <Header/>

        {/* SearchBar */} 

        <SearchBar 
          value={searchKey} 
          clearSearch={handleClearSearch}
          formSubmit={handleSearchSubmit} 
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        {/* Blog List and Empty list */}
        {/* if no blogs returned through search results then return EmptyList component */}
        {/* Otherwise return the filtered blogs */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

    </div>
  );
};

export default Home;