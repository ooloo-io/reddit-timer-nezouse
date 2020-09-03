import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../images/logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 3.2rem 8rem;
`;

const NavContainer = styled.nav`
  margin: auto 0;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.6rem;
  margin: 0; 
  padding: 0; 

  font-size: ${(props) => props.theme.font.size.regular};
`;

const NavItem = styled.li`
  list-style-type: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.brownishGrey};
`;

const Navigation = () => (
  <NavContainer>
    <NavList>
      <NavItem>
        <NavLink to="/search/javascript">Search</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/#how-it-works">How it works</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/#about">About</NavLink>
      </NavItem>
    </NavList>
  </NavContainer>
);

const SvgIcon = styled(Logo)`
  display: block;
`;

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <SvgIcon />
    </Link>
    <Navigation />
  </HeaderContainer>
);

export default Header;
