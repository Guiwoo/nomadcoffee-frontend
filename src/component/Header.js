import { useQuery } from "@apollo/client";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { logUserOut } from "../apollo";
import routes from "../route";
import CoffeeIcon from "./CoffeeIcon";

const SHeader = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.fontColor};
  position: fixed;
  top: 0px;
  background-color: ${(props) => props.theme.bgColor};
`;

const ThirtyThree = styled.div`
  padding: 0px 20px;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const IconBox = styled(ThirtyThree)`
  justify-content: flex-start;
`;
const Title = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bgColor};
  top: 15px;
  padding: 15px;
  font-size: 50px;
  font-family: "Palette Mosaic", cursive;
`;
const HeaderIcon = styled(CoffeeIcon)`
  position: absolute;
  top: 5px;
  font-size: 70px;
`;
const DetailBox = styled(ThirtyThree)`
  font-size: large;
  justify-content: space-between;
  font-family: "Palette Mosaic", cursive;
  top: 30px;
  background-color: ${(props) => props.theme.bgColor};
`;

const Thelink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
`;

const ShopsBtn = styled.div`
  padding: 7px 0px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.amIhere ? "rgba(200, 200, 200, 0.3)" : props.theme.bgColor};
`;

const Profile = styled.div`
  padding: 7px 0px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.amIhere ? "rgba(200, 200, 200, 0.3)" : props.theme.bgColor};
`;

const CreateBtn = styled.div`
  padding: 7px 0px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.amIhere ? "rgba(200, 200, 200, 0.3)" : props.theme.bgColor};
`;

const LogoutBtn = styled.button`
  border: none;
  font-size: large;
  font-family: "Palette Mosaic", cursive;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.blue};
    transform: scale(1.2);
  }
`;

const ME_QUERY = gql`
  query me {
    me {
      id
      username
    }
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const { data } = useQuery(ME_QUERY);
  const history = useHistory();
  const Logout = () => {
    logUserOut();
    history.push(routes.home, {
      message: "Log out",
    });
  };
  return (
    <SHeader>
      <IconBox>
        <HeaderIcon>
          <FontAwesomeIcon icon={faCoffee} />
        </HeaderIcon>
      </IconBox>
      <ThirtyThree>
        <Title>
          <Thelink to={routes.home}>Nomad Coffee</Thelink>
        </Title>
      </ThirtyThree>
      <DetailBox>
        <ShopsBtn amIhere={pathname === routes.home}>
          <Thelink to={routes.home}>Coffee Shops</Thelink>
        </ShopsBtn>
        <CreateBtn amIhere={pathname === routes.create}>
          <Thelink to={routes.create}>Create a Shop</Thelink>
        </CreateBtn>
        <Profile amIhere={pathname === `/shop/${data?.me?.username}`}>
          <Thelink to={`/shop/${data?.me?.username}`}>Profile</Thelink>
        </Profile>
        <LogoutBtn onClick={Logout}>Log out</LogoutBtn>
      </DetailBox>
    </SHeader>
  );
};

export default Header;
