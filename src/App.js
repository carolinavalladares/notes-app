// import { useState } from "react";
import "./App.css";

import PostForm from "./components/PostForm/PostForm";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import { PostsContextProvider } from "./contexts/PostsContext";

function App() {
  return (
    <div className="App">
      <h1>Notes</h1>

      <PostsContextProvider>
        <PostForm />
        <PostsContainer />
      </PostsContextProvider>
    </div>
  );
}

export default App;
