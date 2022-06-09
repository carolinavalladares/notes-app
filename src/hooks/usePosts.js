import { useContext } from "react";
import PostsContext from "../contexts/PostsContext";

export const usePosts = () => {
  const { addPost, deletePost, filterPosts, filteredPosts } =
    useContext(PostsContext);

  return { addPost, deletePost, filterPosts, filteredPosts };
};
