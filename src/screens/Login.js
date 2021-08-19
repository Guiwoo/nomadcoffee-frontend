import CoffeeIcon from "../component/CoffeeIcon";
import Container from "../component/Auth/Container";
import MainBox from "../component/Auth/MainBox";
import FormBox from "../component/Auth/FormBox";
import Divder from "../component/Auth/Divder";
import FaceBook from "../component/Auth/FaceBook";
import SubBox from "../component/Auth/SubBox";
import routes from "../route";
import PageTitle from "../component/PageTitle";
import { useForm } from "react-hook-form";
import Button from "../component/Auth/Button";
import FormError from "../component/Auth/FormError";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import { useLocation } from "react-router";
import Notification from "../component/Notification";
import DarkMode from "../component/DarkMode";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = () => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password1 || "",
    },
  });
  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      setError("result", {
        message: error,
      });
    }
    if (token) {
      logUserIn(token);
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    login({
      variables: {
        username,
        password,
      },
    });
  };
  const clearLoginErorr = () => {
    clearErrors("result");
  };
  return (
    <Container>
      <DarkMode />
      <PageTitle pageTitle="Login" />
      {Boolean(location?.state?.message) ? (
        <Notification message={location?.state?.message} />
      ) : null}
      <MainBox>
        <CoffeeIcon>
          <FontAwesomeIcon icon={faCoffee} />
        </CoffeeIcon>
        <FormBox onSubmit={handleSubmit(onSubmitValid)}>
          <input
            {...register("username", {
              required: "Username is required",
            })}
            onFocus={clearLoginErorr}
            type="text"
            placeholder="Username"
            name="username"
          />
          <FormError message={formState.errors?.username?.message} />
          <input
            {...register("password", { required: "Password is required" })}
            onFocus={clearLoginErorr}
            type="password"
            placeholder="Password"
            name="password"
          />
          <FormError message={formState.errors?.password?.message} />
          <FormError message={formState.errors?.result?.message} />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Log in"}
            disabled={!formState.isValid || loading}
          />
        </FormBox>
        <Divder>
          <div></div>
          <span>OR</span>
          <div></div>
        </Divder>
        <FaceBook />
      </MainBox>
      <SubBox
        text={"Don't have an account ?"}
        link={routes.signUp}
        linkText={"Sign up"}
      />
    </Container>
  );
};

export default Login;
