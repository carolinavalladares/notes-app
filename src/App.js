import "./App.css";
import PostForm from "./components/PostForm/PostForm";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import { PostsContextProvider } from "./contexts/PostsContext";

function App() {
  return (
    <div className="App">
      <div className="theme-switch">
        <ThemeSwitch />
      </div>
      <h1>Notes</h1>

      <PostsContextProvider>
        <PostForm />
        <PostsContainer />
      </PostsContextProvider>
    </div>
  );
}

export default App;
