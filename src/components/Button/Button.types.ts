import {ButtonProps} from "@mui/material";

export interface IButtonProps extends ButtonProps {
  className: string;
  variant?: ButtonType;
}

export enum ButtonType {
  text = "text",
  contained = "contained",
  outlined = "outlined",
}
