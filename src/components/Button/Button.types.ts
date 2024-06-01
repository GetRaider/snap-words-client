import {ButtonProps} from "@mui/material";

export interface IButtonProps extends ButtonProps {
  className: string;
  variant?: ButtonType;
  onClick?: () => unknown;
  dataTestId?: string;
}

export enum ButtonType {
  text = "text",
  contained = "contained",
  outlined = "outlined",
}
