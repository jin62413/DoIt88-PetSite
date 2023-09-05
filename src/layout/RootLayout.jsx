// import { Outlet } from "react-router-dom";

// import Main from "./MainBox";
import Home from '@/pages/Home';
import Footer from './Footer';
import MainNav from './MainNav';

function RootLayout() {
  return (
    <>
      <MainNav />
      <Home />
      <Footer />
    </>
  );
}

export default RootLayout;
