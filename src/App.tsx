import "./App.css";
import DarkModeContextProvider from "./contexts/dark-mode/DarkModeContextProvider";
import { FrontPage } from "./components";
import DarkModeSwitcher from "./components/DarkModeSwitcher";

function App() {
  return (
    <DarkModeContextProvider>
      <div className="text-3xl">
        <FrontPage />
        <DarkModeSwitcher />
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
