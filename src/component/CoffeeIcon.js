import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CoffeeIcon = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  font-size: 120px;
  background-color: ${(props) => props.theme.blue};
  border: 1px solid white;
  border-radius: 50%;
`;

export default () => (
  <CoffeeIcon>
    <FontAwesomeIcon icon={faCoffee} />
  </CoffeeIcon>
);
