import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout({children}) {
  return (
    <div>
      <div className="content min-h-[100%]">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
