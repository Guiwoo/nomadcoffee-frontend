import styled from "styled-components";

const Divder = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  align-items: center;
  margin-bottom: 30px;
  div {
    opacity: 0.9;
    background-color: white;
    width: 100%;
    height: 2px;
  }
  span {
    text-align: center;
    display: block;
    margin: 0 10px;
  }
`;

export default Divder;
