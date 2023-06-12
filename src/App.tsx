import "./App.css";
import DarkModeContextProvider from "./contexts/dark-mode/DarkModeContextProvider";
import { Navbar, SocialIcons } from "./components/navbar";
import DarkModeSwitcher from "./components/DarkModeSwitcher";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { Home } from "./components/home";
import Contacts from "./components/Contacts";
import { About } from "./components/about";

function App() {
  return (
    <DarkModeContextProvider>
      <div className="min-h-screen">
        <Navbar />
        <Home />
        <Experience />
        <Education />
        <Contacts />

        <SocialIcons />
        <DarkModeSwitcher />
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
