import "./App.css";
import DarkModeContextProvider from "./contexts/dark-mode/DarkModeContextProvider";
import { Navbar, SocialIcons } from "./components/navbar";
// import DarkModeSwitcher from "./components/DarkModeSwitcher";
import { Experience } from "./components/experience";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Footer } from "./components/footer";

function App() {
  return (
    <DarkModeContextProvider>
      <div className="min-h-screen">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Footer />

        {/* Floating gadgets */}
        <SocialIcons />
        {/* <DarkModeSwitcher /> */}
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
