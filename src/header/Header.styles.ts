import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: lightblue;
  height: 91px;
  width: 100%;
`;

export const LogoContainer = styled.section<any>`
  float: left;
  height: 100%;
  min-width: ${(props: any) => props.width}px;
  max-width: ${(props: any) => props.width}px;
  padding: 30px 35px 0px 10px;
`;

export const Logo = styled.svg<any>`
  background-image: url(${(props: any) => props.src});
  height: 43px;
  width: 180px;
`;

export const NavContainer = styled.section<any>`
  float: left;
  height: 100%;
  width: calc(100% - ${(props: any) => props.width}px);
`;

export const Nav = styled.nav<any>`
  background-color: ${(props) => props.background};
  border-bottom: ${(prop) => (prop.borderBottom ? '1px solid #d8d8d8' : '0px')};
  height: ${(props) => props.height}px;
  width: 100%;
`;
