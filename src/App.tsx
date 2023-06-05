import "./App.css";
import DarkModeContextProvider from "./contexts/dark-mode/DarkModeContextProvider";
import { FrontPage } from "./components";
import DarkModeSwitcher from "./components/DarkModeSwitcher";
import { WorkExperience } from "./components/experience";
import { Education } from "./components/education";

function App() {
  return (
    <DarkModeContextProvider>
      <div>
        <FrontPage />
        <WorkExperience />
        <Education />

        <DarkModeSwitcher />
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
