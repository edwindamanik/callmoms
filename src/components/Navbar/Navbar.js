import React from "react";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
};

export default Navbar;
