import styled from "styled-components";
import React from "react";
import MainBox from "./MainBox";
import { Link } from "react-router-dom";
import PropTypes from "proptypes";

const SSubBox = styled(MainBox)`
  margin-top: 30px;
`;

const SLink = styled(Link)`
  font-weight: 600;
  color: ${(props) => props.theme.blue};
`;

const SubBox = ({ text, link, linkText }) => (
  <SSubBox>
    <div>
      {text}
      <SLink to={link}> {linkText}</SLink>
    </div>
  </SSubBox>
);

SubBox.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default SubBox;
