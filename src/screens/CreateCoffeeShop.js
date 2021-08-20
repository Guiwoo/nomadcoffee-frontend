import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "../component/Auth/Button";
import FormBox from "../component/Auth/FormBox";
import FormError from "../component/Auth/FormError";
import Header from "../component/Header";
import { HomeContainer, Title } from "../component/Home/HomeSection";
import PageTitle from "../component/PageTitle";
import {
  MainSection,
  SectionBox,
  SubSectionBox,
} from "../component/shared/ScreenMain";
import routes from "../route";

const Container = styled(HomeContainer)``;

const STitle = styled(Title)`
  left: 300px;
`;

const CSectionBox = styled(SectionBox)`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  position: relative;
`;

const SFormBox = styled(FormBox)``;

const ImgFile = styled.div`
  align-items: center;
  img {
    display: block;
    weight: 500px;
    height: 250px;
  }
  label {
    font-size: 18px;
    margin-right: 20px;
    color: black;
  }
`;

const Check = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
`;

const LocationFinder = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 280px;
  bottom: 230px;
  button {
    background-color: inherit;
    opacity: 0.3;
    cursor: pointer;
    &:hover {
      border: 3px solid blue;
    }
  }
`;

const CREATE_COFFEE_SHOP = gql`
  mutation createCoffeeShop(
    $name: String!
    $latitude: String!
    $longitude: String!
    $categoryItem: String
    $file: Upload!
  ) {
    createCoffeeShop(
      name: $name
      latitude: $latitude
      longitude: $longitude
      categoryItem: $categoryItem
      file: $file
    ) {
      ok
      error
    }
  }
`;
const UPLOAD_MUT = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`;

const CreateCoffeeShop = () => {
  const history = useHistory();
  const { register, handleSubmit, formState, setError, clearErrors } = useForm({
    mode: "onChange",
  });

  const [createCoffeeShop, { loading }] = useMutation(CREATE_COFFEE_SHOP, {
    onCompleted: (data) => {
      const {
        createCoffeeShop: { ok, error },
      } = data;
      if (!ok) {
        setError("result", {
          message: error,
        });
        return;
      }
      history.push(routes.home, {
        message: "Coffee shop created!",
      });
    },
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { name, latitude, longitude, categoryItem, file } = data;
    console.log(file[0]);
    createCoffeeShop({
      variables: {
        name,
        latitude,
        longitude,
        categoryItem,
        file: file[0],
      },
    });
  };
  const clearLoginErorr = () => {
    clearErrors("result");
  };
  return (
    <Container>
      <PageTitle pageTitle="A Coffee Shop" />
      <Header />
      <CSectionBox>
        <STitle>Creat a Coffee Shop</STitle>
        <SubSectionBox />
        <MainSection>
          <Check>
            <SFormBox
              method="post"
              enctype="multipart/form-data"
              onSubmit={handleSubmit(onSubmitValid)}
            >
              <ImgFile>
                <label htmlFor="imgFile">Shop 📷 </label>
                <input
                  {...register("file", { required: "Photo is required!" })}
                  type="file"
                  accept="imgae/png, image/jpg"
                />
              </ImgFile>
              <label htmlFor="name">Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                onFocus={clearLoginErorr}
              />
              <FormError message={formState.errors?.name?.message} />
              <LocationFinder>
                <button>Your Loaction</button>
              </LocationFinder>
              <label htmlFor="latitude">Latitude </label>
              <input
                {...register("latitude", { required: "Latitude is required" })}
                type="text"
                name="latitude"
                onFocus={clearLoginErorr}
              />
              <FormError message={formState.errors?.latitdue?.message} />
              <label htmlFor="longitude">Longitude</label>
              <input
                {...register("longitude", {
                  required: "Longitude is required",
                })}
                type="text"
                onFocus={clearLoginErorr}
              />
              <FormError message={formState.errors?.longitude?.message} />
              <label htmlFor="slug">Slug </label>
              <input
                {...register("categoryItem", { required: "Slug is required" })}
                type="text"
                onFocus={clearLoginErorr}
              />
              <FormError message={formState.errors?.categoryItem?.message} />
              <Button
                type="submit"
                value={loading ? "Loading..." : "Create an CoffeeShop!"}
                disabled={!formState.isValid || loading}
              />
            </SFormBox>
          </Check>
        </MainSection>
        <SubSectionBox />
      </CSectionBox>
    </Container>
  );
};

export default CreateCoffeeShop;
