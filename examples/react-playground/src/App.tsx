import { Button } from "@namui/react/components/button";
import viteLogo from "/vite.svg";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
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
      <h1>Vite + React</h1>
      <Button />
    </>
  );
}

export default App;
