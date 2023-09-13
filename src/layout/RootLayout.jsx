// import { Outlet } from "react-router-dom";

// import Main from "./MainBox";
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function RootLayout() {
  return (
    <>
      {/* <Main/> */}
      <Header />

      <main className="font-pre">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
