import styled from "@emotion/styled";
import Background from "../../Assets/background.jpeg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .opacity_container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.6;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.586053) 0.01%,
      rgba(0, 0, 0, 0) 0.02%,
      rgba(0, 0, 0, 0.586053) 0.03%,
      #000000 99.99%
    );
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    .opacity_container {
      width: 50vw;
      left: 0;
    }
  }
`;
