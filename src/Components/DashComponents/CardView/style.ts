import styled from "@emotion/styled";

export const Container = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  img {
    border-radius: 8px;
  }

  transition: 0.8s;

  :hover,
  :focus {
    height: 360px;
    width: 240px;

    div {
      /* background: linear-gradient(
        to bottom,
        rgba(255, 0, 0, 0) 0%,
        rgba(10, 10, 40, 1) 40%
      ); */
      height: 150px;

      p {
        padding-top: 12px;
      }

      > div {
        padding-top: 0px;
      }
    }
  }
`;

export const Title = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );

  border-top-right-radius: 40%;
  border-top-left-radius: 40%;

  display: flex;
  flex-direction: column;

  padding-top: 12px;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 1.8rem;
  color: var(--white);
  overflow: hidden;

  transition: 0.7s;

  position: absolute;
  p {
    margin-top: 12px;
  }

  > div {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
      width: 155px;

      button {
        color: var(--black);
      }
    }
  }
`;
