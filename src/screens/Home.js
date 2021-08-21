import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../component/Header";
import { HomeContainer, Title } from "../component/Home/HomeSection";
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
  display: flex;
  justify-content: center;
`;

const PageToNext = styled.button`
  background-color: inherit;
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.2);
  }
`;

const Home = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery(SEE_COFFEE_SHOPS, {
    variables: {
      page,
    },
    pollInterval: 500,
  });

  return (
    <HomeContainer>
      <PageTitle pageTitle="Home" />
      <Header />
      {data ? (
        <SectionBox>
          <SubSectionBox />
          <SMainSection>
            <Title>Coffee Shops</Title>
            <ItemBox {...data} />
            <PageBox>
              {page > 1 ? (
                <PageToNext onClick={() => setPage(page - 1)}>
                  Back..
                </PageToNext>
              ) : null}
              {data?.seeCoffeeShops?.length < 4 ? null : (
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
