import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../apollo";
import React from "react";

const Container = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  size: 18px;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  border: none;
  &:hover {
    border: 3px solid ${(props) => props.theme.blue};
  }
`;
const TheIcon = styled(FontAwesomeIcon)`
  margin-right: 7px;
`;

export default () => {
  const DarkMod = useReactiveVar(darkModeVar);
  return (
    <Container onClick={() => (DarkMod ? disableDarkMode() : enableDarkMode())}>
      <TheIcon icon={DarkMod ? faSun : faMoon}></TheIcon>
      <span>{DarkMod ? "Light Mode" : "Dark Mode"}</span>
    </Container>
  );
};
