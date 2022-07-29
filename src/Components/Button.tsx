import React from "react";
import { FC } from "react";
import MyButton from "./Button.styled";
import { ButtonType } from "./Button.types";

const Button: FC<ButtonType> = ({
  variant = "primary",
  text="Hello",
  size="medium",
  stickyPosition,
  onClick,
}) => {
  return (
    <MyButton stickyPosition={stickyPosition}  size={size} onClick={onClick} variant={variant}>
      {text}
    </MyButton>
  );
};

export default Button;
