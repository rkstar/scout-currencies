import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 10vw auto;
  grid-template-areas: code rate;

  > * {
    border: 1px solid #212121;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #5652bf;
    }
  }
`;

export const Code = styled.div`
  grid-template-area: code;
`;

export const Rate = styled.div`
  grid-template-area: rate;
`;
