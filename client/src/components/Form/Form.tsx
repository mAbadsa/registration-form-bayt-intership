import { ChangeEvent, FC, ReactElement, useState } from "react";

import { useFormik } from "formik";
import FormHelperText from "@mui/material/FormHelperText";
import CircularProgress from "@mui/material/CircularProgress";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import TextField from "../TextField";
import Button from "../Button";
import {
  individualValidationRules,
  businessValidationRules,
} from "./validation";

import { FormProps } from "./type";
import { selectOptions } from "./selectOptions";

import StyledForm, {
  classes,
  InputContainer,
  StyledDesktopDatePicker,
} from "./styles";
import dayjs from "dayjs";

const Form: FC<FormProps> = ({
  className,
  children,
  onSubmit,
  onFinish,
  isLoading,
  ...props
}): ReactElement<any, any> | null => {
  const [accountState, setAccountState] = useState("individual");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthdate: dayjs(Date.now()),
      gender: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      address: "",
      accountType: "individual",
    },
    validationSchema:
      accountState === "individual"
        ? individualValidationRules
        : businessValidationRules,
    onSubmit: (values) => {
      onFinish(values);
    },
  });

  const handleClick = (event: ChangeEvent<MouseEvent>) => {
    formik.handleSubmit();
  };

  return (
    <StyledForm className={`${classes.root}`} onSubmit={formik.handleSubmit}>
      <InputContainer>
        <TextField
          className={`${
            !!formik.touched.firstName && !!formik.errors.firstName
              ? "error"
              : "success"
          }`}
          type="text"
          name="firstName"
          id="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          label="First name"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
            mr: 1,
          }}
          error={!!formik.touched.firstName && !!formik.errors.firstName}
        />
        <TextField
          className={`${
            !!formik.touched.firstName && !!formik.errors.firstName
              ? "error"
              : "success"
          }`}
          type="text"
          name="lastName"
          id="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          label="Last name"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
          }}
          error={!!formik.touched.lastName && !!formik.errors.lastName}
        />
        <FormHelperText
          sx={{ color: "#FF0000", fontSize: "12px" }}
          children={formik.errors.lastName}
          error={!!formik.touched.lastName && !!formik.errors.lastName}
        />
        <FormHelperText
          sx={{ color: "#FF0000", fontSize: "12px" }}
          children={formik.errors.firstName}
          error={!!formik.touched.firstName && !!formik.errors.firstName}
        />
      </InputContainer>
      <TextField
        className={`${
          !!formik.touched.firstName && !!formik.errors.firstName
            ? "error"
            : "success"
        }`}
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        label="Email"
        variant="filled"
        size="small"
        fullWidth
        error={!!formik.touched.email && !!formik.errors.email}
      />
      <FormHelperText
        sx={{ color: "#FF0000", fontSize: "12px" }}
        children={formik.errors.email}
        error={!!formik.touched.email && !!formik.errors.email}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDesktopDatePicker
          className={`${
            !!formik.touched.birthdate && !!formik.errors.birthdate
              ? "error"
              : "success"
          }`}
          label="birthdate"
          inputFormat="MM/DD/YYYY"
          value={formik.values.birthdate}
          onChange={(value) => formik.setFieldValue("birthdate", value, true)}
          renderInput={(params: any) => <TextField fullWidth {...params} />}
        />
      </LocalizationProvider>
      <FormHelperText
        sx={{ color: "#FF0000", fontSize: "12px" }}
        children={formik.errors.birthdate}
        error={!!formik.touched.birthdate && !!formik.errors.birthdate}
      />
      <FormControl
        sx={{ minWidth: 120, mt: 1, width: "100%", background: "#f5f5f5" }}
      >
        <InputLabel id="gender-select-helper-label">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          name="gender"
          value={formik.values.gender}
          label="Gender"
          onChange={formik.handleChange}
          autoWidth
        >
          {selectOptions.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item[0].toUpperCase() + item.slice(1)}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText
          sx={{ color: "#FF0000", fontSize: "12px" }}
          children={formik.errors.gender}
          error={!!formik.touched.gender && !!formik.errors.gender}
        />
      </FormControl>
      <TextField
        className={`${
          !!formik.touched.firstName && !!formik.errors.firstName
            ? "error"
            : "success"
        }`}
        type="phone"
        name="phoneNumber"
        id="phoneNumber"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
        label="Phone number"
        variant="filled"
        size="small"
        fullWidth
        error={!!formik.touched.phoneNumber && !!formik.errors.phoneNumber}
      />
      <FormHelperText
        sx={{ color: "#FF0000", fontSize: "12px" }}
        children={formik.errors.phoneNumber}
        error={!!formik.touched.phoneNumber && !!formik.errors.phoneNumber}
      />
      <TextField
        className={`${
          !!formik.touched.firstName && !!formik.errors.firstName
            ? "error"
            : "success"
        }`}
        type="password"
        name="password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        label="Password"
        variant="filled"
        size="small"
        fullWidth
        error={!!formik.touched.password && !!formik.errors.password}
      />
      <FormHelperText
        sx={{ color: "#FF0000", fontSize: "12px" }}
        children={formik.errors.password}
        error={!!formik.touched.password && !!formik.errors.password}
      />
      <TextField
        className={`${
          !!formik.touched.firstName && !!formik.errors.firstName
            ? "error"
            : "success"
        }`}
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        label="Confirm password"
        variant="filled"
        size="small"
        fullWidth
        error={
          !!formik.touched.confirmPassword && !!formik.errors.confirmPassword
        }
      />
      <FormHelperText
        sx={{ color: "#FF0000", fontSize: "12px" }}
        children={formik.errors.confirmPassword}
        error={
          !!formik.touched.confirmPassword && !!formik.errors.confirmPassword
        }
      />
      {accountState === "business" && (
        <>
          <TextField
            type="address"
            name="address"
            id="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            label="Address"
            variant="filled"
            size="small"
            fullWidth
            error={!!formik.touched.address && !!formik.errors.address}
          />
          <FormHelperText
            sx={{ color: "#FF0000", fontSize: "12px" }}
            children={formik.errors.address}
            error={!!formik.touched.address && !!formik.errors.address}
          />
        </>
      )}
      <FormControl
        sx={{ minWidth: 120, mt: 1, width: "100%", background: "#f5f5f5" }}
      >
        <InputLabel id="account-type">Account Type</InputLabel>
        <Select
          labelId="accountType"
          id="accountType"
          name="accountType"
          value={formik.values.accountType}
          label="Account Type"
          onChange={(evt) => {
            setAccountState(evt.target.value);
            formik.handleChange(evt);
          }}
          autoWidth
          sx={{ mt: 1 }}
        >
          <MenuItem value={"individual"}>{"Individual"}</MenuItem>
          <MenuItem value={"business"}>{"Business"}</MenuItem>
        </Select>
        <FormHelperText
          sx={{ color: "#FF0000", fontSize: "12px" }}
          children={formik.errors.accountType}
          error={!!formik.touched.accountType && !!formik.errors.accountType}
        />
      </FormControl>
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 4, height: 55 }}
        disableElevation
        onClick={handleClick}
      >
        {isLoading ? (
          <CircularProgress
            sx={{
              color: "#F5F5F5",
            }}
          />
        ) : (
          "Next"
        )}
      </Button>
    </StyledForm>
  );
};

export default Form;

