import { createContext, useState, useEffect } from "react";

const PostsContext = createContext({});

// {
//     title: String;
//     text: String;
//     important: Boolean;
// }

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const addPost = (title, text, important) => {
    setPosts((prev) => [
      ...prev,
      { title: title, text: text, important: important },
    ]);
  };

  const deletePost = (post) => {
    const filteredArray = posts.filter((currentPost) => {
      return post !== currentPost;
    });

    setPosts(filteredArray);
  };

  const filterPosts = (filter) => {
    if (filter === "important") {
      const importantPosts = posts.filter((currentPost) => {
        return currentPost.important === true;
      });
      setFilteredPosts(importantPosts);
    } else if (filter === "not-important") {
      const importantPosts = posts.filter((currentPost) => {
        return currentPost.important === false;
      });
      setFilteredPosts(importantPosts);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <PostsContext.Provider
      value={{ posts, addPost, deletePost, filterPosts, filteredPosts }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
