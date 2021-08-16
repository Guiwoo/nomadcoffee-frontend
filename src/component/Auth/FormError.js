import styled from "styled-components";

const SFormError = styled.span`
  text-align: center;
  color: tomato;
  font-weight: 600;
  font-size: 12px;
`;
const FormError = ({ message }) => {
  return message === "" || !message ? null : <SFormError>{message}</SFormError>;
};

export default FormError;
