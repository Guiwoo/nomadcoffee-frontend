import { Link } from "react-router-dom";
import styled from "styled-components";

const SItemBox = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Item = styled.div``;

const ItmeInfo = styled.div`
  text-align: center;
  height: 170px;
`;
const ItemName = styled.div`
  color: black;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const BackImg = styled.img`
  width: 70%;
  height: 300px;
  border-radius: 20px;
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

const ItemBox = ({ seeCoffeeShops }) => {
  return (
    <SItemBox>
      {seeCoffeeShops?.map((shop, index) => (
        <Item key={index}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <BackImg src={shop.file} />
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
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
          </div>
        </Item>
      ))}
    </SItemBox>
  );
};

export default ItemBox;
