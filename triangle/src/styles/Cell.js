import styled from "styled-components";

export const Cell = styled.div`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};

  width: 100%;
  height: 100%;
  padding: 1rem;

  p > span {
    font-weight: bold;
  }

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
