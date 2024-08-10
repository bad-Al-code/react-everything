import Header from "./componenets/Header/Header";
import Footer from "./componenets/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="p-6">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
