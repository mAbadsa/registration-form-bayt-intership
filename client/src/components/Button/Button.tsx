import { FC, ReactElement } from "react";

import StyledButton, { classes } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  className,
  children,
  variant,
  color = "primary",
  withIcon,
  size = "medium",
  sx,
  arialabel,
  fullWidth = false,
  disableElevation = false,
  onClick,
  ...props
}: ButtonProps): ReactElement<any, any> | null => {
  return (
    <StyledButton
      className={`${className} ${withIcon ? classes.withButton : ""}`}
      disableElevation={disableElevation}
      variant={variant}
      color={color}
      size={size}
      sx={sx}
      aria-label={arialabel}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

