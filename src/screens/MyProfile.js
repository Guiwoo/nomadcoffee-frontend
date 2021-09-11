import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import SeperateTitle from "../component/Profile/SeperateTitle";

const Conataienr = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  position: relative;
`;
const EditBox = styled.div`
  display: flex;
`;
const ImageFileBox = styled.div`
  padding: 20px;
`;
const ImageBox = styled.img`
  width: 300px;
  height: 200px;
  display: block;
`;
const ChangeBox = styled.input`
  margin-top: 7px;
`;
const CoffeeShopInfo = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;
const MyFormBox = styled.form``;
const InputBox = styled.div`
  padding: 7px;
  margin-bottom: 10px;
  label {
    font-size: 15px;
    font-weight: 600;
    margin-right: 5px;
  }
  input {
    &:focus {
      border-bottom: 1px solid white;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
      font-size: 13px;
    }
  }
`;
const EditButton = styled.input`
  padding: 5px 15px;
  background-color: #abf0d1;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;
const DeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeleteBtn = styled.button`
  color: white;
  padding: 5px 15px;
  background-color: #abf0d1;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

const EDIT_MUTATION = gql`
  mutation editCoffeeShop(
    $id: Int!
    $name: String
    $latitude: String
    $longitude: String
    $categoryItem: String
  ) {
    editCoffeeShop(
      id: $id
      name: $name
      latitude: $latitude
      longitude: $longitude
      categoryItem: $categoryItem
    ) {
      ok
      error
    }
  }
`;
const SEE_COFFEE_SHOP = gql`
  query seeCoffeeShop($id: Int!) {
    seeCoffeeShop(id: $id) {
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
const DELETE = gql`
  mutation deleteCoffeeShop($id: Int!) {
    deleteCoffeeShop(id: $id) {
      ok
    }
  }
`;

export default () => {
  const {
    state: { coffeeShop },
  } = useLocation();
  const history = useHistory("/");
  const { seeCoffeeShop } = useQuery(SEE_COFFEE_SHOP, {
    variables: {
      id: coffeeShop.id,
    },
  });
  const { register, handleSubmit, formState, setError, clearErrors } = useForm({
    mode: "onChange",
  });
  const [editCoffeeShop, { loading }] = useMutation(EDIT_MUTATION, {
    onCompleted: (data) => {
      const {
        editCoffeeShop: { ok, error },
      } = data;
      history.push(`/shop/:id`);
    },
    refetchQueries: ["me"],
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { name, longitude, latitude, categoryItem } = data;
    editCoffeeShop({
      variables: {
        id: coffeeShop?.id,
        name,
        longitude,
        latitude,
        categoryItem,
      },
    });
  };
  const [deleteCoffeeShop] = useMutation(DELETE, {
    variables: {
      id: coffeeShop.id,
    },
    refetchQueries: ["me"],
  });
  const onDeleteClick = () => {
    deleteCoffeeShop();
    history.push("/shop/:id");
  };

  return (
    <Conataienr>
      <SeperateTitle text={`Edit: ${coffeeShop?.name}`} />
      <EditBox>
        <ImageFileBox>
          <ImageBox src={coffeeShop?.file} />
        </ImageFileBox>
        <CoffeeShopInfo>
          <MyFormBox onSubmit={handleSubmit(onSubmitValid)}>
            <InputBox>
              <label for="name">Shop Name :</label>
              <input
                {...register("name")}
                id="name"
                placeholder={coffeeShop.name}
                type="text"
              />
            </InputBox>
            <InputBox>
              <label for="longitude">Longitude :</label>
              <input
                {...register("longitude")}
                placeholder={coffeeShop.longitude}
                type="text"
                id="longitude"
              />
            </InputBox>
            <InputBox>
              <label for="latitude">Latitude :</label>
              <input
                {...register("latitude")}
                placeholder={coffeeShop.latitude}
                type="text"
                name="latitude"
              />
            </InputBox>
            <InputBox>
              <label for="categoryItem">Category :</label>
              <input
                {...register("categoryItem")}
                placeholder={coffeeShop?.categories?.map((a) => a.name)}
                type="text"
                name="categoryItem"
                disabled={true}
              />
            </InputBox>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EditButton
                type="submit"
                value={loading ? "Loading..." : "Edit Coffee Shop"}
                disabled={!formState.isValid || loading}
              />
            </div>
          </MyFormBox>
        </CoffeeShopInfo>
        <DeleteBox>
          <DeleteBtn onClick={onDeleteClick}>Delete</DeleteBtn>
        </DeleteBox>
      </EditBox>
    </Conataienr>
  );
};
