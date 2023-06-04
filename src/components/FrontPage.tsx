import { Navbar, SocialIcons } from "./navbar";
import Introduction from "./Introduction";
import Contacts from "./Contacts";

const FrontPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialIcons />
      <Introduction />
      <Contacts />
    </div>
  );
};
FrontPage.displayName = "FrontPage";
export default FrontPage;
