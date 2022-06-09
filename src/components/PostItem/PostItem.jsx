import React from "react";
import styles from "./styles.module.css";
import TrashIcon from "../../assets/Icons/TrashIcon";
import { usePosts } from "../../hooks/usePosts";

const PostItem = ({ post }) => {
  const { deletePost } = usePosts();

  const handleDelete = () => {
    deletePost(post);
  };

  return (
    <div className={styles.post}>
      <h4>{post.title}</h4>
      <p>{post.text}</p>

      {post.important ? <div className={styles.importantFlag}></div> : null}

      <button className={styles.deleteBtn} onClick={handleDelete}>
        <TrashIcon width={18} height={20} />
      </button>
    </div>
  );
};

export default PostItem;
