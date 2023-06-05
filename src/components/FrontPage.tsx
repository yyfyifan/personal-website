import { Navbar, SocialIcons } from "./navbar";
import Contacts from "./Contacts";
import { Home } from "./home";

const FrontPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialIcons />
      <Home />
      <Contacts />
    </div>
  );
};
FrontPage.displayName = "FrontPage";
export default FrontPage;
