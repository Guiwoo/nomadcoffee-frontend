import styled from "styled-components";

const Button = styled.input`
  color: ${(props) => (props.disabled ? "white" : "black")};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  margin-top: 5px;
  background-color: ${(props) => props.theme.blue};
  cursor: pointer;
  border-radius: 7px;
  font-weight: 600;
  text-align: center;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;
