import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Route, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormBox from "../component/Auth/FormBox";
import Header from "../component/Header";
import ItemBox from "../component/Home/ItemBox";
import PageTitle from "../component/PageTitle";
import {
  MainSection,
  SectionBox,
  SubSectionBox,
} from "../component/shared/ScreenMain";
import Edit from "./Edit";

const ME = gql`
  query me {
    me {
      id
      username
      coffeeShops {
        id
        name
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
  align-items: center;
  position: absolute;
  left: 10px;
  top: -15px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;
`;
const Inner = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`;
const InnerEdit = styled(Inner)`
  h1 {
    font-size: 20px;
  }
`;

const ItemsBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  h3 {
    margin-right: 30px;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 5px;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  &:hover {
    color: yellow;
  }
`;

export default () => {
  const { data } = useQuery(ME);
  const { pathname } = useLocation();
  return (
    <Container>
      <PageTitle pageTitle="My Profile" />
      <Header />
      <SectionBox>
        <SubSectionBox />
        <MainSection>
          <ContentBox>
            <Inner>
              <Title>Coffee Shops List</Title>
              <div>
                {data?.me?.coffeeShops?.map((shop, index) => (
                  <ItemsBox key={index}>
                    <h3>{shop.name}</h3>
                    <SLink to={`${pathname}/${shop.name}`}>
                      <span>Edit shop</span>
                    </SLink>
                  </ItemsBox>
                ))}
              </div>
            </Inner>
          </ContentBox>
        </MainSection>
        <SubSectionBox />
      </SectionBox>
      <Route path={`/shop/:username/:coffeeShop`} exact>
        <Edit {...data?.me} pathname={pathname} />
      </Route>
    </Container>
  );
};
