import "./App.css";
import DarkModeContextProvider from "./contexts/dark-mode/DarkModeContextProvider";
import FrontPage from "./FrontPage";

function App() {
  return (
    <DarkModeContextProvider>
      <div className="bg-white px-10 text-3xl dark:bg-gray-900">
        <FrontPage />
      </div>
    </DarkModeContextProvider>
  );
}

export default App;
