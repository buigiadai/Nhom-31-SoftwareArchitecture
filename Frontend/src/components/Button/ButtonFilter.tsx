import React from "react";
import Button from "./Button";
import { icons } from "utils/icons";
interface IProps {
  setIsOpen: any;
  isOpen: boolean;
}

const { FilterOutlined } = icons;

const ButtonFilter = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <Button
      handleOnclick={() => setIsOpen((prev: boolean) => !prev)}
      title="Lọc"
      customClass={!isOpen ? "bg-white !text-main hover:!text-sub" : ""}
      iconBefore={<FilterOutlined />}
    />
  );
};

export default ButtonFilter;
