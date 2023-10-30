import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function PrivateLayout() {
  console.log("I am private layout");
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PrivateLayout;
