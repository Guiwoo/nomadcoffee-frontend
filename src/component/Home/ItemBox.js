import { Link } from "react-router-dom";
import styled from "styled-components";

const SItemBox = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Item = styled.div``;

const ItmeInfo = styled.div`
  text-align: center;
  border: 3px solid white;
  height: 170px;
`;
const ItemName = styled.div`
  color: black;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const BackImg = styled.div`
  margin-left: 5px;
  width: 200px;
  height: 300px;
  background: url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60")
    no-repeat;
  background-size: 100%;
`;

const ItemOwner = styled.div`
  color: black;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
`;

const SLink = styled(Link)`
  display: flex;
  font-weight: 600;
  justify-content: flex-start;
  margin-left: 30px;
  color: black;
  &:hover {
    color: yellow;
  }
`;

const SItemSlug = styled.div``;

const SlugName = styled.div`
  margin: 10px 30px;
  color: black;
  font-weight: 600;
  display: flex;
`;

const ItemBox = (data) => {
  return (
    <SItemBox {...data}>
      {data?.seeCoffeeShops?.map((shop, index) => (
        <Item key={index}>
          <BackImg />
          <ItmeInfo>
            <ItemName>
              <SLink to={"#"}>💚 {shop.name}</SLink>
            </ItemName>
            <ItemOwner>Owner : {shop.user.username}</ItemOwner>
            <ItemOwner>
              Location : {shop.latitude},{shop.longitude}
            </ItemOwner>
            <SLink to={"#"}> Search Location...🔎</SLink>
            <SItemSlug>
              <SlugName>💚 Slugs..!</SlugName>
              {shop.categories.map((word, index) => (
                <ItemOwner key={index} style={{ color: "white" }}>
                  {word.name}
                </ItemOwner>
              ))}
            </SItemSlug>
          </ItmeInfo>
        </Item>
      ))}
    </SItemBox>
  );
};

export default ItemBox;
