import {Button} from "@mui/material";

import {ButtonType, IButtonProps} from "./Button.types.ts";

export function ButtonComponent(props: IButtonProps) {
  const {className, variant = ButtonType.contained, children} = props;

  return (
    <>
      <Button variant={variant} className={className}>
        {children}
      </Button>
    </>
  );
}
