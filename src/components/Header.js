import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../images/logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 8rem;

  height: ${(props) => props.theme.size.headerHeight};
  font-size: ${(props) => props.theme.font.size.regular};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-left: 2.6rem;

  color: ${(props) => props.theme.color.brownishGrey};
`;

const SvgIcon = styled(Logo)`
  display: block;
`;

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <SvgIcon />
    </Link>
    <nav>
      <NavLink to="/search/javascript">Search</NavLink>
      <NavLink to="/#how-it-works">How it works</NavLink>
      <NavLink to="/#about">About</NavLink>
    </nav>
  </HeaderContainer>
);

export default Header;
