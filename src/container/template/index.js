import React from "react";
import './template.css'
import { Navbar, Sidebar } from "../../components";

const index = ({ children }) => {
  return (
    <React.Fragment>
      <Sidebar />
      <Navbar />
      <div className="contentWrapperTemplate">
        {children}
      </div>
    </React.Fragment>
  );
};

export default index;
