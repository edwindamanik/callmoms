import React, { useState } from "react";
import "./Login.css";
import { MomVector, DoctorVector } from "../../../assets/images/";
import { ReactComponent as LockIcon } from "../../../assets/icons/lock-icon.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/icons/phone-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { PopUp } from "../../../components";
import { Form, Field } from "react-final-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const onSubmit = async (values) => {
    const email = values.email;
    const password = values.sandi;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      setMessage('Akun anda salah');
      setType('failed')
      setOpen(true)
    }
  };

  const handleClosePopUp = () => {
    setOpen(false);
  };

  return (
    <div className="containerLogin">
      <div className="left-side-login">
        <img src={MomVector} alt="MomImage" />
      </div>
      <div className="middle-login">
        <div className="login-form-wrapper">
          <h4>Selamat Datang</h4>
          <Form
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email wajib diisi";
              }
              if (!values.sandi) {
                errors.sandi = "Kata sandi wajib diisi";
              }
              return errors;
            }}
            keepDirtyOnReinitialize
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <p>Email</p>
                <Field name="email">
                  {({ input, meta }) => (
                    <div className="input-login-wrapper">
                      <input
                        type="text"
                        placeholder="Masukkan email"
                        value={input.value}
                        onChange={input.onChange}
                      />
                      <PhoneIcon
                        style={{
                          position: "absolute",
                          width: "30px",
                          height: "30px",
                          top: 10,
                          left: 20,
                        }}
                      />
                      {meta.error && meta.touched && (
                        <div className="error-message">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <p>Kata Sandi</p>
                <Field name="sandi">
                  {({ input, meta }) => (
                    <div className="input-login-wrapper">
                      <input
                        type="password"
                        placeholder="Masukkan kata sandi"
                        value={input.value}
                        onChange={input.onChange}
                      />
                      <LockIcon
                        style={{
                          position: "absolute",
                          width: "30px",
                          height: "30px",
                          top: 10,
                          left: 20,
                        }}
                      />
                      {meta.error && meta.touched && (
                        <div className="error-message">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <button className="btn-login">Masuk</button>
              </form>
            )}
          />
          <PopUp
            isOpen={open}
            dialogText={message}
            onClose={handleClosePopUp}
            type={type}
          />
          <p className="redirect-register">
            Tidak terdaftar? <Link to="/register">Buat Akun</Link>
          </p>
        </div>
      </div>
      <div className="right-side-login">
        <img src={DoctorVector} alt="MomImage" />
      </div>
    </div>
  );
};

export default Login;
