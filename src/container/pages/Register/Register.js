import React, { Fragment, useState } from "react";
import "./Register.css";
import { MomVector, DoctorVector } from "../../../assets/images/";
import { Link, useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { PopUp } from "../../../components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const onSubmit = async (values) => {
    const email = values.email;
    const password = values.sandi;
    const displayName = values.nama;

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        displayName,
        email
      })

      await setDoc(doc(db, "userChats", response.user.uid), {})
      setMessage('Berhasil Mendaftarkan Akun');
      setType('success')
      setOpen(true)

    } catch (error) {
      setMessage('Somethin went wrong');
      setType('failed')
      setOpen(true)
    }
  };

  const handleCloseRegister = () => {
    setOpen(false);
    if (type === "success") {
      navigate("/");
    }
  };

  return (
    <div className="containerLogin">
      <div className="left-side-login">
        <img src={MomVector} alt="MomImage" />
      </div>
      <div className="middle-login">
        <div className="login-form-wrapper">
          <h4>Buat Akun Anda</h4>
          <Form
            validate={(values) => {
              const errors = {};
              if (!values.nama) {
                errors.nama = "Nama wajib diisi";
              }
              if (!values.email) {
                errors.email = "Email wajib diisi";
              }
              if (!values.sandi) {
                errors.sandi = "Kata sandi wajib diisi";
              }
              if (values.sandi !== values.sandi_confirmation) {
                errors.sandi_confirmation = "Kata sandi anda belum serupa";
              }
              return errors;
            }}
            keepDirtyOnReinitialize
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <p>Nama</p>
                <Field name="nama">
                  {({ input, meta }) => (
                    <>
                      <div className="input-login-wrapper">
                        <input
                          type="text"
                          placeholder="Masukkan nama anda"
                          value={input.value}
                          onChange={input.onChange}
                        />
                      </div>
                      {meta.error && meta.touched && (
                        <div className="error-message">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <p>Jenis Kelamin</p>
                <Field name="jenis_kelamin" initialValue="Wanita">
                  {({ input }) => (
                    <div className="gender-group">
                      <div className="radio-register">
                        <input
                          type="radio"
                          value="Wanita"
                          onChange={() => input.onChange("Wanita")}
                          checked={input.value === "Wanita"}
                        />
                        <span>Perempuan</span>
                      </div>
                      <div className="radio-register">
                        <input
                          type="radio"
                          value="Pria"
                          onChange={() => input.onChange("Pria")}
                          checked={input.value === "Pria"}
                        />
                        <span>Laki laki</span>
                      </div>
                    </div>
                  )}
                </Field>
                <p>Email</p>
                <Field name="email">
                  {({ input, meta }) => (
                    <>
                      <div className="input-login-wrapper">
                        <input
                          type="text"
                          placeholder="Masukkan email"
                          value={input.value}
                          onChange={input.onChange}
                        />
                      </div>
                      {meta.error && meta.touched && (
                        <div className="error-message">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <p>Peran</p>
                <Field name="peran" initialValue="Ibu">
                  {({ input }) => (
                    <div className="gender-group">
                      <div className="radio-register">
                        <input
                          type="radio"
                          value="Ibu"
                          onChange={() => input.onChange("Ibu")}
                          checked={input.value === "Ibu"}
                        />
                        <span>Ibu Pra/Pasca melahirkan</span>
                      </div>
                      <div className="radio-register">
                        <input
                          type="radio"
                          value="Anggota"
                          onChange={() => input.onChange("Anggota")}
                          checked={input.value === "Anggota"}
                        />
                        <span>Keluarga / Lingkungan</span>
                      </div>
                    </div>
                  )}
                </Field>
                <p>Sandi</p>
                <Field name="sandi">
                  {({ input, meta }) => (
                    <>
                      <div className="input-login-wrapper">
                        <input
                          type="password"
                          placeholder="Masukkan kata sandi"
                          value={input.value}
                          onChange={input.onChange}
                        />
                      </div>
                      {meta.error && meta.touched && (
                        <div className="error-message">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <p>Konfirmasi Sandi</p>
                <Field name="sandi_confirmation">
                  {({ input, meta }) => (
                    <>
                      <div className="input-login-wrapper">
                        <input
                          type="password"
                          placeholder="Masukkan ulang kata sandi anda"
                          value={input.value}
                          onChange={input.onChange}
                        />
                      </div>
                      {meta.error && meta.touched && (
                        <div className="error-message">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <button className="btn-login">Daftar</button>
              </form>
            )}
          />
          <PopUp
            isOpen={open}
            dialogText={message}
            onClose={handleCloseRegister}
            type={type}
          />
          <p className="redirect-register">
            Sudah memiliki akun? <Link to="/login">Masuk Disini</Link>
          </p>
        </div>
      </div>
      <div className="right-side-login">
        <img src={DoctorVector} alt="MomImage" />
      </div>
    </div>
  );
};

export default Register;
