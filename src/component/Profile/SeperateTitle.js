import React from "react";
import styled from "styled-components";

const BottomHeader = styled.div`
  margin-bottom: 15px;
`;
const HeaderLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;
const HeaderText = styled.div`
  position: absolute;
  padding: 0px 10px;
  top: -10px;
  left: 20px;
  background-color: #2c2c2c;
  font-weight: 600;
  font-size: 20px;
`;

export default ({ text }) => {
  return (
    <BottomHeader>
      <HeaderLine />
      <HeaderText>
        <span>{text}</span>
      </HeaderText>
    </BottomHeader>
  );
};
