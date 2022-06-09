import React from "react";

import PostItem from "../PostItem/PostItem";
import { usePosts } from "../../hooks/usePosts";

import styles from "./styles.module.css";

const PostsContainer = () => {
  const { posts, filterPosts, filteredPosts } = usePosts();

  const handleFilter = (e) => {
    const value = e.target.value;
    filterPosts(value);
  };

  if (posts.length === 0) {
    return <div></div>;
  }

  return (
    <div className={styles.postsContainer}>
      <div className={styles.filterContainer}>
        <p>Filter Notes: </p>
        <select
          className={styles.filterSelect}
          onChange={handleFilter}
          name="filter"
          id="filter"
        >
          <option value="all">All</option>
          <option value="important">Important</option>
          <option value="not-important">Not Important</option>
        </select>
      </div>
      <div className={styles.postsWrapper}>
        {filteredPosts.map((post, index) => {
          return <PostItem key={index} post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostsContainer;
