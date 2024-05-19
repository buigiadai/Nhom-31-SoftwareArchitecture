import { Col } from "antd";
import Button from "components/Button/Button";
import Content from "layouts/Content";
import React, { ReactNode, useState } from "react";
import { icons } from "utils/icons";

interface IProps {
  children: ReactNode;
  isOpen: boolean;
}

const FormFilter = ({ children, isOpen }: IProps) => {
  return (
    <div
      className={` ${
        isOpen
          ? "block transition duration-1000"
          : " hidden transition duration-1000"
      } mt-4`}
    >
      <Content>{children}</Content>
    </div>
  );
};

export default FormFilter;
