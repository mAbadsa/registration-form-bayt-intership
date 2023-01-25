import * as Yup from "yup";
import dayjs from "dayjs";

export const individualValidationRules = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("This field is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("This field is required"),
  birthdate: Yup.date().test(
    "birthdate",
    "Age must be greater than or equal to 18",
    (value) => {
      const date1 = dayjs(Date.now());
      const date2 = dayjs(value);
      let diffDate = date1.diff(date2, "year");
      return Math.abs(diffDate) >= 18 ? true : false;
    }
  ),
  gender: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Oops! You need a password longer than 8 characters with numbers and letters."
    )
    .min(8, "Password must be at least 8 characters")
    .required("This field is required"),
  confirmPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Oops! You need a password longer than 8 characters with numbers and letters."
    )
    .min(8, "Password must be at least 8 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("This field is required"),
});

export const businessValidationRules = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("This field is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("This field is required"),
  phoneNumber: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Oops! You need a password longer than 8 characters with numbers and letters."
    )
    .min(8, "Password must be at least 8 characters")
    .required("This field is required"),
  confirmPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Oops! You need a password longer than 8 characters with numbers and letters."
    )
    .min(8, "Password must be at least 8 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("This field is required"),
  address: Yup.string().required("This field is required"),
});

