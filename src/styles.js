import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  blue: "#abf0d1",
  fontColor: "black",
  bgColor: "white",
  borderColor: "rgba(32,32,32,0.5)",
};
export const darkTheme = {
  fontColor: "white",
  bgColor: "#aa4b6b",
  blue: "#abf0d1",
  borderColor: "rgba(255, 255, 255, 0.5)",
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
      background: #aa4b6b;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      font-size: 15px;
      color: ${(props) => props.theme.fontColor};
      height:100vh;
    }
    a{
      text-decoration: none;
    }
`;
