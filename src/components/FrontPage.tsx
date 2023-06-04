import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Contacts from "./Contacts";
const FrontPage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Introduction />
      <Contacts />
    </div>
  );
};
FrontPage.displayName = "FrontPage";
export default FrontPage;
