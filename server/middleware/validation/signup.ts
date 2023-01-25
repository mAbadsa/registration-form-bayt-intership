import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";
import dayjs from "dayjs";

import { boomify } from "../../utils";

const signupValidation =
  ({ boomify }: { boomify: (statusCode: number, message: string) => void }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        firstName,
        lastName,
        birthdate,
        gender,
        phoneNumber,
        email,
        password,
        confirmPassword,
        address,
        accountType,
      } = req.body;

      // console.log({ body: req.body });

      console.log({ accountType });

      const signupIndividualSchema = Yup.object({
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
            return diffDate >= 18 ? true : false;
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

      const signupBusinessSchema = Yup.object().shape({
        firstName: Yup.string().required("This field is required"),
        lastName: Yup.string().required("This field is required"),
        phoneNumber: Yup.string().required("This field is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
        password: Yup.string()
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
            message:
              "At least one lowercase characters, one uppercase characters and one number",
          })
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

      if (accountType === "individual") {
        await signupIndividualSchema.validate(
          {
            firstName,
            lastName,
            birthdate,
            gender,
            email,
            password,
            confirmPassword,
          },
          {
            abortEarly: false,
          }
        );
      }

      if (accountType === "business") {
        await signupBusinessSchema.validate(
          {
            firstName,
            lastName,
            phoneNumber,
            email,
            password,
            confirmPassword,
            address,
          },
          {
            abortEarly: false,
          }
        );
      }

      return next();
    } catch (error: any) {
      next(boomify(400, error.errors[0]));
    }
  };

export default signupValidation;

