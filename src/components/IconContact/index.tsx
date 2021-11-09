import React from "react";

import { Container } from "./styles";

import IconPhone from "../../assets/images/icon-phone.svg";
import IconMessage from "../../assets/images/icon-message.svg";
import IconWebcam from "../../assets/images/icon-webcam.svg";

interface IconContactProps {
  type?: "first" | "second" | "third";
}

const icons = {
  first: <IconPhone />,
  second: <IconMessage />,
  third: <IconWebcam />,
};

const IconContact: React.FC<IconContactProps> = ({ type }) => {
  return <Container type={type}>{icons[type || "first"]}</Container>;
};

export default IconContact;
