import React from 'react';
import {
  HeaderContainer,
  Logo,
  LogoContainer,
  Nav,
  NavContainer
} from './Header.styles';
import Link from 'next/link';

const Header = ({ key, logo, nav }: any) => (
  <HeaderContainer key={key}>
    <LogoContainer width={logo.width}>
      <Link href="./">
        <Logo src={logo.src} />
      </Link>
    </LogoContainer>
    <NavContainer width={logo.width}>
      {nav.map((props: any, index: number): any => (
        <Nav {...props} key={index} />
      ))}
    </NavContainer>
  </HeaderContainer>
);

export default Header;
