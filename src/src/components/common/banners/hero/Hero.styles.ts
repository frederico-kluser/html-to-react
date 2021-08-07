import styled from 'styled-components';

export const ContainerFixed = styled.figure`
  margin: auto;
  max-width: ${({ theme: { layout } }) =>
    `${layout.maxWidth}${layout.widthUnit}`};

  img {
    max-width: 100%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.size.md + breakpoints.unit}) {
    max-width: 100%;
  }
`;
export const ContainerFluid = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
  }
`;
