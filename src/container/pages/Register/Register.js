import React, { useState, Fragment } from "react";
import { Form, Field } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";
import { PopUp } from "../../../components/";
import "./Register.css";
import { ReactComponent as MyEyeIcon } from "../../../assets/icons/eye-icon.svg";
import { ReactComponent as MyCloseEyeIcon } from "../../../assets/icons/eye-close-icon.svg";

function Login() {

  const navigate = useNavigate();

  const [typePassword, setTypePassword] = useState(true);
  const [modal, setModal] = useState(false);

  const showPassword = () => {
    setTypePassword(false);
  };

  const hidePassword = () => {
    setTypePassword(true);
  };

  const onSubmit = (values) => {
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
    navigate('/login')
  };

  return (
    <div className="bodyWrap">
      <div className="container">
        <div className="leftSide">
          <h4>callmoms</h4>
        </div>
        <div className="rightSide">
          <Form
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Nama Lengkap wajib diisi";
              }
              if (!values.email) {
                errors.email = "Email wajib diisi";
              }
              if (!values.username) {
                errors.username = "Username wajib diisi";
              }
              if (!values.password) {
                errors.password = "Password wajib diisi";
              }
              return errors;
            }}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="inputWrapper">
                  <Field name="name">
                    {({ input, meta }) => (
                      <div>
                        <input
                          type="text"
                          placeholder="Masukkan Nama Lengkap"
                          onChange={(val) => {
                            input.onChange(val);
                          }}
                        />
                        {meta.error && meta.touched && (
                          <span className="alert-validation">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <input
                          type="email"
                          placeholder="Masukkan Email"
                          onChange={(val) => {
                            input.onChange(val);
                          }}
                        />
                        {meta.error && meta.touched && (
                          <span className="alert-validation">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="username">
                    {({ input, meta }) => (
                      <div>
                        <input
                          type="text"
                          placeholder="Masukkan Username"
                          onChange={(val) => {
                            input.onChange(val);
                          }}
                        />
                        {meta.error && meta.touched && (
                          <span className="alert-validation">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <div className="passwordInput">
                    <Field name="password">
                      {({ input, meta }) => (
                        <Fragment>
                          <input
                            type={typePassword ? "password" : "text"}
                            placeholder="Masukkan Password"
                            onChange={(val) => {
                              input.onChange(val);
                            }}
                          />
                          {meta.error && meta.touched && (
                            <span className="alert-validation">
                              {meta.error}
                            </span>
                          )}
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
                        </Fragment>
                      )}
                    </Field>
                  </div>
                </div>
                <button type="submit">Daftar</button>
                <div className="register">
                  <span>
                    Sudah punya akun ? <Link to="/login">Masuk Sekarang</Link>{" "}
                  </span>
                </div>
              </form>
            )}
          />
        </div>
      </div>
      <PopUp isOpen={modal} dialogText="Edwin" onClose={onClose} />
    </div>
  );
}

export default Login;
