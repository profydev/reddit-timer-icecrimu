import React from 'react';
import * as S from './Header.style';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <S.Wrapper>
      <Logo />
      <S.Navbar>
        <S.NavList>
          <S.List>Search</S.List>
          <S.List>How it works</S.List>
          <S.List>About</S.List>
        </S.NavList>
      </S.Navbar>
    </S.Wrapper>
  );
}

export default Header;
