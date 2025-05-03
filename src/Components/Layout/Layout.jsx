import React from "react";
import Navbar from '../../Pages/Navbar/index';
import Footer from '../../Pages/Footer/index';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
