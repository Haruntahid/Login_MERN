import React from "react";
import styles from "../styles/Username.module.css";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { resetPasswordValidation } from "../helper/validate";

const Reset = () => {
  const navigate = useNavigate();
  //   const setUsername = useAuthStore((state) => state.setUsername);

  const formik = useFormik({
    initialValues: {
      password: "example123",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      //   setUsername(values.username);
      navigate("/recovery");
    },
  });
  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Reset</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Enter new password
              </span>
            </div>

            <form className="pt-20" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("password")}
                  className={styles.textbox}
                  type="text"
                  placeholder="New Password"
                />
                <input
                  {...formik.getFieldProps("confirm_pwd")}
                  className={styles.textbox}
                  type="text"
                  placeholder="Repeat Password"
                />
                <button className={styles.btn} type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
