import styled from "styled-components";

export const SectionBox = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
`;
export const MainSection = styled.div`
  box-sizing: border-box;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.borderColor};
  background-color: #dccab2;
`;

export const SubSectionBox = styled.div`
  width: 20%;
`;
