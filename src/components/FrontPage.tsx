import Nav from "./Nav";
import Introduction from "./Introduction";
import Contacts from "./Contacts";
const FrontPage = () => {
  return (
    <div className="min-h-screen ">
      <Nav />
      <Introduction />
      <Contacts />
    </div>
  );
};
FrontPage.displayName = "FrontPage";
export default FrontPage;
