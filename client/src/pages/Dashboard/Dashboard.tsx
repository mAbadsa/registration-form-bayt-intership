import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

import SVGIcons from "../../components/SVG/SVGIcons";
import { Header, StyledDashboard, Title } from "./styles";

const Dashboard: FC = () => {
  const location = useLocation();
  const state = location.state as {
    userData: { [key: string]: string | number | boolean };
  };

  return (
    <StyledDashboard>
      <Header>
        <SVGIcons.Envelope />
        <Title>
          <Typography align="left" variant="h2">
            Thanks, {state.userData.firstName}!
          </Typography>
          <Typography align="left" variant="h2">
            We’ve received your application
          </Typography>
        </Title>
      </Header>
      <Typography align="left" variant="body1" sx={{ mb: 4 }}>
        We’ll process your application as soon as possible and send you a
        decision within 30 days to {state.userData.phoneNumber} or{" "}
        {state.userData.email}. We will contact you in case more information is
        needed.
      </Typography>
    </StyledDashboard>
  );
};

export default Dashboard;

