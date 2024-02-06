import reactLogo from "./assets/images/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import {useState} from "react";
import {defaultPosts} from "./constants/data.constants.ts";
import {Header} from "./components/Header.tsx";

function App() {
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className={"App"}>
        <Header />
      </div>
    </>
  );
}

export default App;
