import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-rows: ${props => props.rows};
  grid-template-columns: ${props => props.columns};

  align-items: center;
  justify-items: center;

  gap: 1rem;

  canvas {
    width: 100%;
    height: 100%;
  }
`;
