import Nav from "./Nav";
import Intro from "./Intro";
import Contacts from "./Contacts";
const FrontPage = () => {
  return (
    <div className="min-h-screen ">
      <Nav />
      <Intro />
      <Contacts />
    </div>
  );
};
FrontPage.displayName = "FrontPage";
export default FrontPage;
