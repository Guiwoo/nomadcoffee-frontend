import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  height: 100vh;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 7px;
  font-weight: 600;
  font-size: 30px;
  position: absolute;
  top: -20px;
  left: 15px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
