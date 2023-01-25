export interface ButtonProps {
  className?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  size?: "large" | "medium" | "small";
  sx?: SxProps<Theme> | undefined;
  arialabel?: string;
  disableElevation?: boolean;
  withIcon?: boolean | undefined;
  fullWidth: boolean;
  onClick?: (evt: any) => void;
}
