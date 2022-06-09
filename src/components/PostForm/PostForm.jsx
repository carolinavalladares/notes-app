import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

import { usePosts } from "../../hooks/usePosts";

const PostForm = () => {
  const { addPost } = usePosts();
  const [important, setImportant] = useState(false);
  const titleRef = useRef();
  const textRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();

    const title = titleRef.current.value ? titleRef.current.value : "Note";
    const text = textRef.current.value;
    if (!text) {
      return;
    }

    addPost(title, text, important);

    titleRef.current.value = "";
    textRef.current.value = "";
    setImportant(false);
  };

  const handleImportant = () => {
    setImportant(!important);
  };

  return (
    <div className={styles.inputSection}>
      <form className={styles.form}>
        <label htmlFor="title">
          <input
            ref={titleRef}
            className={styles.titleInput}
            type="text"
            name="title"
            placeholder="insert note title"
          />
        </label>

        <label htmlFor="text">
          <textarea
            ref={textRef}
            className={styles.textInput}
            name="text"
            cols="30"
            rows="10"
            placeholder="enter note"
          ></textarea>
        </label>

        <div onClick={handleImportant} className={styles.importantWrapper}>
          <div
            className={`${styles.importantInput} ${
              important ? styles.active : null
            }`}
          ></div>
          Important
        </div>

        <button onClick={handleAdd} className={styles.submitBtn}>
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
