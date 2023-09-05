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
      <main className="bg-[#222223] font-suit">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
