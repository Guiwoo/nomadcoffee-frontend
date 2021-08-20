import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import CoffeeIcon from "../component/CoffeeIcon";

const SLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: center;
  font-size: 50px;
`;
const IconBox = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
const SCoffeeIcon = styled(CoffeeIcon)`
  box-sizing: border-box;
  font-size: 200px;
  @keyframes waiting {
    from {
      color: white;
    }
    to {
      color: yellow;
      transform: rotatey(360deg);
    }
  }
  animation: waiting 3s linear infinite;
`;

const Loading = () => {
  return (
    <>
      <IconBox>
        <SCoffeeIcon>
          <FontAwesomeIcon icon={faCoffee} />
        </SCoffeeIcon>
      </IconBox>
      <SLoading>Loading......</SLoading>
    </>
  );
};

export default Loading;
