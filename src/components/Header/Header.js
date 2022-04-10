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
          <Link to="/search/javascript">
            <S.List>Search</S.List>
          </Link>
          <Link to="/#how-it-works">
            <S.List>How it works</S.List>
          </Link>

          <Link to="/#about">
            <S.List>About</S.List>
          </Link>
        </S.NavList>
      </S.Navbar>
    </S.Wrapper>
  );
}

export default Header;
