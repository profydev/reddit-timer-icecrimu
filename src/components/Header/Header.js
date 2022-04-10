import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Header.style';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <S.Wrapper>
      <Link to="/">
        <Logo />
      </Link>

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
