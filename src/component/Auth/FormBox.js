import styled from "styled-components";

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 30px;
  input {
    box-sizing: border-box;
    padding: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid white;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:last-child {
      padding: 10px;
    }
    &:focus {
      border-bottom: 1px solid yellow;
      border-top: 1px solid yellow;
    }
    &::placeholder {
      font-size: 17px;
    }
  }
`;

export default FormBox;
