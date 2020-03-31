import styled from "styled-components";

export const Main = styled.main`
  * {
    box-sizing: border-box;
  }

  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template: 1fr / 1fr;

  align-items: center;
  justify-items: center;

  font-family: sans-serif;
`;
