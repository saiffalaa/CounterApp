import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="w-100 ">
      <form
        className="w-75 mx-auto text-start shadow p-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-50 mx-auto">
          <div className="d-flex flex-column w-75 ">
            <label className="fw-bold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
            <label className="fw-bold mt-3">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="d-flex align-items-center mt-3">
            <input
              name="rememberMe"
              value={formik.values.rememberMe}
              onChange={formik.handleChange}
              type="checkbox"
              id="rememberMe"
            />
            <label className="ms-3 fw-bold">Remember Me</label>
          </div>

          <button className="btn btn-primary mt-3" type="submit">
            Login
          </button>
        </div>
        {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
      </form>
    </div>
  );
};

export default Login;
