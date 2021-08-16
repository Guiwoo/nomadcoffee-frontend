import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  transition: all 1s ease-in-out;
`;
const TheBox = styled.div`
  background-color: yellow;
  padding: 15px;
  color: black;
  font-weight: 600;
  font-size: 18px;
  @keyframes fadeIn {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-100px);
      opacity: 0;
    }
  }
  animation: fadeIn 3s linear forwards;
`;

const Notification = ({ message }) => {
  return (
    <Container>
      <TheBox>
        <span>Account has Created</span>
      </TheBox>
    </Container>
  );
};

export default Notification;
