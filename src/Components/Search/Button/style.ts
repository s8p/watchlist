import styled from "@emotion/styled";

export const Container = styled.button`
  width: 50px;
  height: 40px;
  background: #f7d633;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  color: black;
  font-family: Roboto;
  font-style: Medium;
  font-size: 18px;
  line-height: 26px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: black;
  }
`;
