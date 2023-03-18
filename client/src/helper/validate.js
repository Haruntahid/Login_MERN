import toast from "react-hot-toast";
// import { authenticate } from "./helper";

/** validate login page username */

// export async function usernameValidate(values) {
//   const errors = usernameVerify({}, values);

//   if (values.username) {
//     // check user exist or not
//     const { status } = await authenticate(values.username);

//     if (status !== 200) {
//       errors.exist = toast.error("User does not exist...!");
//     }
//   }

//   return errors;
// }

/** validate username */
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
}

/** validate password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

/** validate password */
function passwordVerify(errors = {}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      "Password must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special character");
  }

  return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password not match...!");
  }

  return errors;
}
