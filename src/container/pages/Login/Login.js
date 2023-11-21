import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { ReactComponent as MyEyeIcon } from "../../../assets/icons/eye-icon.svg";
import { ReactComponent as MyCloseEyeIcon } from "../../../assets/icons/eye-close-icon.svg";

function Login() {
  const [typePassword, setTypePassword] = useState(true);

  const showPassword = () => {
    setTypePassword(false);
  };

  const hidePassword = () => {
    setTypePassword(true);
  };

  return (
    <div className="bodyWrap">
      <div className="container">
        <div className="leftSide">
          <h4>callmoms</h4>
        </div>
        <div className="rightSide">
          <form>
            <div className="inputWrapper">
              <input type="text" placeholder="Masukkan Username" />
              <div className="passwordInput">
                <input
                  type={typePassword ? "password" : "text"}
                  placeholder="Masukkan Password"
                />
                <MyEyeIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    right: "10px",
                    top: "12px",
                    cursor: "pointer",
                    display: typePassword ? "block" : "none",
                  }}
                  onClick={showPassword}
                />
                <MyCloseEyeIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    right: "10px",
                    top: "12px",
                    cursor: "pointer",
                    display: typePassword ? "none" : "block",
                  }}
                  onClick={hidePassword}
                />
              </div>
            </div>
            <button type="button">Masuk</button>
            <div className="register">
              <span>
                Belum punya akun ? <Link to="/register">Daftar Sekarang</Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
