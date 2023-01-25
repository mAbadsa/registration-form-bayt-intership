import { styled } from "@mui/material/styles";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const PREFIX = "StyledForm";

export const classes = {
  root: `${PREFIX}-root`,
};

export const StyledForm = styled("form")(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: "500px",
  },
}));

export const InputContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  columnGap: "10px",
});

export const Image = styled("img")({
  width: "26px",
  height: "30px",
  margin: "12px 0px 12px 16px",
});

export const StyledDesktopDatePicker = styled(DesktopDatePicker)`
  error {
    fieldset {
      border-color: red;
    }
  }
`;

export default StyledForm;

