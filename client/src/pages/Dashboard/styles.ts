import { styled } from "@mui/material/styles";

export const StyledDashboard = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

export const Title = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  padding: theme.spacing(4),
  color: theme.palette.primary.dark,
}));

