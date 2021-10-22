import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  active: false,
  gender: "",
  hobbies: [""],
};
const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
const validationSchema = yup.object({
  username: yup.string().required(),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  password: yup
    .string()
    .required("Password field is required")
    .min(4, "Must be atleast 4 character")
    .matches(
      /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
      "Must be UpperCase, LowerCase, Numbers and Special characters"
    ),
  confirmPassword: yup
    .string()
    .required()
    .when("password", {
      is: (val) => (val ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password Don't match"),
    }),
});
const Register = () => {
  return (
    <div className="text-start shadow p-5 mb-3 mt-0 pt-3 w-50 mx-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        className="d-flex flex-column"
      >
        {(formik) => {
          return (
            <Form className="d-flex flex-column">
              <Field name="username">
                {(formikField) => {
                  return (
                    <>
                      <label className="fw-bold">Username</label>
                      <input placeholder="Username" {...formikField.field} />
                      <ErrorMessage name="username">
                        {(errMessage) => {
                          return (
                            <div className="text-danger">{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>
              <Field name="email">
                {(formikField) => {
                  return (
                    <>
                      <label className="fw-bold mt-3">Email</label>
                      <input placeholder="email" {...formikField.field} />
                      <ErrorMessage name="email">
                        {(errMessage) => {
                          return (
                            <div className="text-danger">{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>
              <Field name="password">
                {(formikField) => {
                  return (
                    <>
                      <label className="fw-bold mt-3">Password</label>
                      <input
                        type="password"
                        placeholder="password"
                        {...formikField.field}
                      />
                      <ErrorMessage name="password">
                        {(errMessage) => {
                          return (
                            <div className="text-danger">{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>
              <Field name="confirmPassword">
                {(formikField) => {
                  return (
                    <>
                      <label className="fw-bold mt-3">Confirm password</label>
                      <input
                        type="password"
                        placeholder="confirm password"
                        {...formikField.field}
                      />
                      <ErrorMessage name="confirmPassword">
                        {(errMessage) => {
                          return (
                            <div className="text-danger">{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </>
                  );
                }}
              </Field>

              <Field name="active">
                {(formikField) => {
                  return (
                    <div className="d-flex fw-bold mt-3  align-items-center">
                      <input type="checkbox" {...formikField.field} />
                      <label className="ms-3">Active</label>
                      <ErrorMessage name="active">
                        {(errMessage) => {
                          return (
                            <div className="text-danger">{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </div>
                  );
                }}
              </Field>
              <p className="mb-0 mt-3 fw-bold">Gender</p>
              <Field name="gender">
                {(formikField) => {
                  return (
                    <div className="d-flex flex-column  mb-3">
                      <div>
                        <input
                          type="radio"
                          name="type"
                          value="male"
                          onChange={() =>
                            formikField.form.setFieldValue("gender", "male")
                          }
                          // {...formikField.field}
                        />
                        <label className="ms-3">Male</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="type"
                          value="female"
                          onChange={() =>
                            formikField.form.setFieldValue("gender", "female")
                          }
                        />
                        <label className="ms-3">Female</label>
                      </div>
                      {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                    </div>
                  );
                }}
              </Field>

              <FieldArray name="hobbies">
                {(FieldArrayProps) => {
                  console.log(FieldArrayProps);
                  const { push, remove, form } = FieldArrayProps;
                  const { values } = form;
                  const { hobbies } = values;
                  console.log(hobbies);
                  return (
                    <>
                      <div>
                        <label className="fw-bold ">Hobbies</label>
                        {hobbies.map((hobby, index) => {
                          return (
                            <div key={index}>
                              <Field name={`hobbies[${index}]`} />
                              <button
                                className="btn ms-3 btn-danger"
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Delete Hobby
                              </button>
                            </div>
                          );
                        })}
                        <button
                          className="btn btn-warning"
                          type="button"
                          onClick={() => push("")}
                        >
                          Add Hobby
                        </button>
                      </div>
                    </>
                  );
                }}
              </FieldArray>
              <button className="btn btn-primary mt-3">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
