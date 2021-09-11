import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/Header";
import PageTitle from "../component/PageTitle";
import SeperateTitle from "../component/Profile/SeperateTitle";
import MyProfile from "./MyProfile";

const ME = gql`
  query me {
    me {
      username
      email
      name
      location
      avatarURL
      coffeeShops {
        id
        name
        file
        latitude
        longitude
        categories {
          id
          name
        }
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SectionBox = styled.div`
  width: 65%;
  justify-content: center;
  margin-top: 150px;
`;
const IdProfileBox = styled.div`
  display: flex;
  border: 1px solid white;
`;
const ImageBox = styled.div`
  padding: 20px;
  margin-left: 20px;
  width: 40%;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 60%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
const UserName = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 11px;
`;
const ProfilDetail = styled.div``;
const CoffeeShopBox = styled.div`
  width: 100%;
  justify-content: center;
  height: 20px;
  margin-top: 20px;
  position: relative;
`;
const BottomBox = styled.div``;
const ImageGrid = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const GirdContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;
const GridImage = styled.img`
  width: 220px;
  height: 120px;
`;
const GridTitle = styled.h3`
  text-align: center;
  font-weight: 600;
`;
const TheLink = styled(Link)`
  color: white;
  cursor: pointer;
`;

const Profile = () => {
  const { data } = useQuery(ME);
  const location = useLocation();
  return (
    <Container>
      <PageTitle pageTitle="My Profile" />
      <Header />
      <SectionBox>
        <IdProfileBox>
          <ImageBox>
            <Image src="https://popularbio.com/wp-content/uploads/2021/05/Abigail-Cowen.jpg" />
          </ImageBox>
          <ProfileInfo>
            <TextBox>
              <UserName>
                <span>{data?.me?.name}</span>
              </UserName>
              <ProfilDetail>
                <label>Email : </label>
                <span>{data?.me?.email}</span>
              </ProfilDetail>
              <ProfilDetail>
                <label>Location : </label>
                <span>{data?.me?.location}</span>
              </ProfilDetail>
            </TextBox>
          </ProfileInfo>
        </IdProfileBox>
        {location?.pathname?.length > 10 ? (
          <MyProfile />
        ) : (
          <CoffeeShopBox>
            <SeperateTitle text={"Coffee Shops"} />
            <BottomBox>
              <ImageGrid>
                {data?.me?.coffeeShops?.map((coffeeShop) => (
                  <GirdContainer>
                    <TheLink
                      to={{
                        pathname: `/shop/${data?.me?.username}/${coffeeShop.id}`,
                        state: { coffeeShop },
                      }}
                    >
                      <GridImage src={coffeeShop.file} />
                      <GridTitle>{coffeeShop.name}</GridTitle>
                    </TheLink>
                  </GirdContainer>
                ))}
              </ImageGrid>
            </BottomBox>
          </CoffeeShopBox>
        )}
      </SectionBox>
    </Container>
  );
};

// <Edit {...data?.me} pathname={pathname} /> put it back on 182

export default Profile;
