import React from "react";

type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
type ButtonType = "button" | "submit" | "reset";

interface IProps {
  title: string;
  handleOnclick?: ButtonClickHandler;
  customClass?: string;
  iconBefore?: any;
  iconAfter?: any;
  disabled?: boolean;
  type?: ButtonType;
}

const Button = ({
  title,
  handleOnclick,
  customClass,
  iconBefore,
  iconAfter,
  type,
  disabled,
}: IProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleOnclick}
      className={`border-2 border-main text-sub bg-main hover:bg-main/90 py-2 px-5 rounded-md mt-5 flex items-center justify-center transition duration-300 ${
        disabled && "bg-disabled cursor-not-allowed"
      } ${customClass}`}
    >
      {iconBefore && <span className="mr-2">{iconBefore}</span>}
      <b>{title}</b>
      {/* {iconAfter && <span className="ml-2">{{ iconAfter }}</span>} */}
    </button>
  );
};

export default Button;
