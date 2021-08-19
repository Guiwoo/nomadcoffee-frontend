import styled from "styled-components";

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 30px;
  label {
    color: black;
    font-size: 18px;
    font-weight: 500;
  }
  input {
    box-sizing: border-box;
    padding: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid white;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    &:last-child {
      padding: 10px;
    }
    &:not(:last-child) {
      &:hover {
        border: 2px solid blue;
      }
    }
    &::placeholder {
      font-size: 17px;
    }
  }
`;

export default FormBox;
