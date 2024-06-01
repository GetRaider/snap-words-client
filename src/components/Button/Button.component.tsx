import {Button} from "@mui/material";

import {ButtonType, IButtonProps} from "./Button.types.ts";

export function ButtonComponent(props: IButtonProps) {
  const {
    className,
    variant = ButtonType.contained,
    children,
    onClick,
    dataTestId,
  } = props;

  return (
    <>
      <Button
        onClick={onClick}
        variant={variant}
        className={className}
        data-testid={dataTestId}
      >
        {children}
      </Button>
    </>
  );
}
