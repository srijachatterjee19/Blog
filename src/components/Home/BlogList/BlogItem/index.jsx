import React from 'react';
import './style.css';
import Chip from '../../../common/Chip';


//using destructor to get blog data
const BlogItem = ({
    blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover
    },
  }) => {
  return (
    <div className="blogItem-wrapper">
        <img src={cover} alt="cover"/>
        <Chip label={category} />

    </div>
  );
};

export default BlogItem;