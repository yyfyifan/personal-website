import "./App.css";
import DarkModeContextProvider from "./contexts/dark-mode/DarkModeContextProvider";
import { Navbar, SocialIcons } from "./components/navbar";
// import DarkModeSwitcher from "./components/DarkModeSwitcher";
import { Experience } from "./components/experience";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { SnapContainer } from "./components/scroll-snaps";
function App() {
  return (
    <DarkModeContextProvider>
      {/* A snap container with full-page scrolling */}
      <SnapContainer className="h-screen">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Footer />

        {/* Floating gadgets */}
        <SocialIcons />
        {/* <DarkModeSwitcher /> */}
      </SnapContainer>
    </DarkModeContextProvider>
  );
}

export default App;
