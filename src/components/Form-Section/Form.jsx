import React from "react";
import { Formik, Form, Field } from "formik";

const MyForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        // handle submission to database here
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
