import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
 const validationSchema = Yup.object().shape({
      full_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")
    });

export default validationSchema;