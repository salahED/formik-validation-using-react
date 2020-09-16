import React from "react";
import * as Yup from "yup";
import validationSchema from "./validation";
import { useFormik } from "formik";
export default function Formi() {
const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    validationSchema,
     onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  
  return (
    <div className="App">
      <h1>Validation with Formik + Yup</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="full_name"
             placeholder="Name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.full_name}</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="confirm password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors.confirm_password &&
            formik.touched.confirm_password && (
              <p>{formik.errors.confirm_password}</p>
            )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
