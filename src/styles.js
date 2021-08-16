import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  blue: "#abf0d1",
  fontColor: "#2c2c2c",
  bgColor: "white",
};
export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
  blue: "#abf0d1",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  input{
    all:unset
  }
  *{
    box-sizing:border-box;
  }
  body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: ${(props) => props.theme.bgColor};
      font-size: 15px;
      color: ${(props) => props.theme.fontColor}
    }
    a{
      text-decoration: none;
    }
`;
