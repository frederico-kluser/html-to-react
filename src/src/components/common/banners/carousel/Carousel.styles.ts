import styled from 'styled-components';

export const ContainerFixed = styled.div`
  margin: auto;
  max-width: ${({ theme: { layout } }) =>
    `${layout.maxWidth}${layout.widthUnit}`};
  img {
    margin: auto;
    max-width: 100%;
  }
`;

export const ContainerFluid = styled.div`
  width: 100%;
  .carousel-item {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      margin: auto;
      max-width: 100%;
    }
  }
`;
