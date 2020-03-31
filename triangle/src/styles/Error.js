import styled from "styled-components";

export const Error = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ef5350;

  display: grid;
  justify-items: center;
  align-items: center;

  p {
    color: white;
    font-weight: 600;
    font-size: 2rem;
    overflow-wrap: break-word;
    text-align: center;
  }
`;
