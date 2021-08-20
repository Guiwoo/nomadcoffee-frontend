import React from "react";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SFaceBook = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.blue};
  color: black;
  padding: 10px 20px;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 15px;
  width: 80%;
  span {
    font-size: 18px;
    display: block;
    margin-left: 7px;
  }
`;

const FaceBook = () => (
  <SFaceBook>
    <FontAwesomeIcon
      style={{ color: "#3b5998", fontSize: "18px", fontWeight: 600 }}
      icon={faFacebookSquare}
    />
    <span>Log in with Facebook</span>
  </SFaceBook>
);

export default FaceBook;
