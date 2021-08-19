import styled from "styled-components";

const MainBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  padding: 25px 20px;
  border: 2px solid ${(props) => props.theme.borderColor};
`;

export default MainBox;
