import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import styled from "styled-components";
import Header from "../component/Header";
import { HomeContainer } from "../component/Home/HomeSection";
import ItemBox from "../component/Home/ItemBox";
import PageTitle from "../component/PageTitle";
import {
  MainSection,
  SectionBox,
  SubSectionBox,
} from "../component/shared/ScreenMain";
import Loading from "./Loading";

const SEE_COFFEE_SHOPS = gql`
  query seeCoffeeShops($page: Int!) {
    seeCoffeeShops(page: $page) {
      id
      name
      user {
        id
        username
        avatarURL
        totalFollowings
      }
      latitude
      longitude
      file
      categories {
        id
        name
      }
    }
  }
`;

const SMainSection = styled(MainSection)`
  position: relative;
`;

const PageBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50%;
`;

const PageToNext = styled.button`
  background-color: inherit;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #5ed2f3;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.2);
    color: yellow;
  }
`;

const Home = () => {
  const [page, setPage] = useState(0);
  const { data } = useQuery(SEE_COFFEE_SHOPS, {
    variables: {
      page,
    },
  });
  return (
    <HomeContainer>
      <PageTitle pageTitle="Home" />
      <Header />
      {data ? (
        <SectionBox>
          <SubSectionBox />
          <SMainSection>
            <ItemBox {...data} />
            <PageBox>
              {page > 1 ? (
                <PageToNext onClick={() => setPage(page - 1)}>
                  Back..
                </PageToNext>
              ) : null}
              {data?.seeCoffeeShops?.length < 2 ? null : (
                <PageToNext onClick={() => setPage(page + 1)}>
                  Next..
                </PageToNext>
              )}
            </PageBox>
          </SMainSection>
          <SubSectionBox />
        </SectionBox>
      ) : (
        <Loading />
      )}
    </HomeContainer>
  );
};

export default Home;
