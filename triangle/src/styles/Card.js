import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  max-width: ${props => props.maxWidth};
`;
