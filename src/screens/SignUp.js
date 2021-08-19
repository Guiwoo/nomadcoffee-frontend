import CoffeeIcon from "../component/CoffeeIcon";
import Container from "../component/Auth/Container";
import MainBox from "../component/Auth/MainBox";
import FormBox from "../component/Auth/FormBox";
import Divder from "../component/Auth/Divder";
import FaceBook from "../component/Auth/FaceBook";
import SubBox from "../component/Auth/SubBox";
import routes from "../route";
import PageTitle from "../component/PageTitle";
import Button from "../component/Auth/Button";
import { useForm } from "react-hook-form";
import FormError from "../component/Auth/FormError";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $password: String!
    $name: String!
    $location: String!
  ) {
    createAccount(
      username: $username
      email: $email
      password: $password
      name: $name
      location: $location
    ) {
      ok
      error
    }
  }
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState,
    setError,
    clearErrors,
    getValues,
  } = useForm({
    mode: "onChange",
  });
  const history = useHistory();
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted: (data) => {
      const { username, password1, password2 } = getValues();
      const {
        createAccount: { ok, error },
      } = data;
      if (password1 !== password2) {
        setError("result", {
          message: "Password does not match!",
        });
        return;
      }
      if (!ok) {
        setError("result", {
          message: error,
        });
        return;
      }
      history.push(routes.home, {
        message: "Account created. Please Log in",
        username,
        password1,
      });
    },
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { username, email, password1, password2, name, location } = data;
    createAccount({
      variables: {
        username,
        email,
        password: password1,
        name,
        location,
      },
    });
  };
  const clearLoginErorr = () => {
    clearErrors("result");
  };
  return (
    <Container>
      <PageTitle pageTitle="Sign up" />
      <MainBox>
        <CoffeeIcon>
          <FontAwesomeIcon icon={faCoffee} />
        </CoffeeIcon>
        <FaceBook />
        <Divder>
          <div></div>
          <span>OR</span>
          <div></div>
        </Divder>
        <FormBox onSubmit={handleSubmit(onSubmitValid)}>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            placeholder="Username"
            onFocus={clearLoginErorr}
          />
          <FormError message={formState.errors?.username?.message} />
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email"
            onFocus={clearLoginErorr}
          />
          <FormError message={formState.errors?.email?.message} />
          <input
            {...register("password1", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            onFocus={clearLoginErorr}
          />
          <FormError message={formState.errors?.password1?.message} />
          <input
            {...register("password2", {
              register: "Confirm Password is required",
            })}
            type="password"
            placeholder="Confirm Password"
            onFocus={clearLoginErorr}
          />
          <FormError message={formState.errors?.password2?.message} />
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
            onFocus={clearLoginErorr}
          />
          <FormError message={formState.errors?.name?.message} />
          <input
            {...register("location", { required: "Location is required" })}
            type="text"
            placeholder="Location"
            onFocus={clearLoginErorr}
          />
          <FormError message={formState.errors?.location?.message} />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Create an Account!"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={formState.errors?.result?.message} />
        </FormBox>
      </MainBox>
      <SubBox
        text={"Have an account ?"}
        link={routes.home}
        linkText={"Log in"}
      />
    </Container>
  );
};

export default SignUp;
