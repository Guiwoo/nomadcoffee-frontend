import styled from "styled-components";

const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export default Container;
