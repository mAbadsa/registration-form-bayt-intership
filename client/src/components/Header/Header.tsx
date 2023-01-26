import { FC, ReactElement } from "react";

import { HeaderProps } from "./type";
import StyledHeader, { classes } from "./styles";

const Header = ({ className }: HeaderProps): ReactElement<any, any> | null => {
  return (
    <StyledHeader className={`${className} ${classes.root}`} component="div">
      Signup Form
    </StyledHeader>
  );
};

export default Header;

