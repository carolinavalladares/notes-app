import { useContext } from "react";
import PostsContext from "../contexts/PostsContext";

export const usePosts = () => {
  const { posts, addPost, deletePost, filterPosts, filteredPosts } =
    useContext(PostsContext);

  return { posts, addPost, deletePost, filterPosts, filteredPosts };
};
