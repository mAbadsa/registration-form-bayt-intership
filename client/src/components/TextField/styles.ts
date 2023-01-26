import MUITextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const PREFIX = "textfield";
export const classes = {
  root: `${PREFIX}-textField`,
  error: `${PREFIX}-textfield`,
};

const StyledTextField = styled(MUITextField)(({ theme, error }) => ({
  [`&.${classes.root}`]: {
    marginBlock: theme.spacing(2),
  },
  [`&.${classes.error} .Mui-error`]: {
    borderColor: error ? "red" : "green",
  },
  "&.success .MuiInputBase-formControl": {
    border: error ? "1px solid red" : "1px solid green",
  },
}));

export default StyledTextField;

