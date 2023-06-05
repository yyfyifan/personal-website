import "./App.css";
import DarkModeContextProvider from "./contexts/dark-mode/DarkModeContextProvider";
import { Navbar, SocialIcons } from "./components/navbar";
import DarkModeSwitcher from "./components/DarkModeSwitcher";
import { WorkExperience } from "./components/experience";
import { Education } from "./components/education";
import { Home } from "./components/home";
import Contacts from "./components/Contacts";

function App() {
  return (
    <DarkModeContextProvider>
      <div className="min-h-screen">
        <Navbar />
        <SocialIcons />
        <Home />
        <WorkExperience />
        <Education />
        <Contacts />

        <DarkModeSwitcher />
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
