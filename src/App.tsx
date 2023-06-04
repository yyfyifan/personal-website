import "./App.css";
import DarkModeContextProvider from "./contexts/dark-mode/DarkModeContextProvider";
import { FrontPage } from "./components";

function App() {
  return (
    <DarkModeContextProvider>
      <div className="text-3xl">
        <FrontPage />
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
