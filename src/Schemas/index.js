import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    age: yup.number().positive().integer().required("Required"),
    password: yup
    .string()
    .min(5)
    .matches(passwordRules, {message:"Please create a strong password"})
    .required("Required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'),null],"Passwords must match")
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters long")
      .required("Required"),
    jobType: yup
      .string()
      .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
      .required("Required"),
    acceptedTos: yup
      .boolean()
      .oneOf([true], "Please accept the terms of service"),
  });



