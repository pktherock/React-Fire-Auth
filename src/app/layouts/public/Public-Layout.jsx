import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function PublicLayout() {
  console.log("I am public layout");
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default PublicLayout;
