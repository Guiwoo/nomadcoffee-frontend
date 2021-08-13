import { isLoggedInVar } from "../apollo";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Log in</button>
    </Container>
  );
};

export default Login;
