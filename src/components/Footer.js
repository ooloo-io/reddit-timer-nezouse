import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { ReactComponent as Icon } from '../images/footerIcon.svg';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  margin: 4rem 25rem;

  font-size: ${(props) => props.theme.font.size.small};
`;

const SvgIcon = styled(Icon)`
  display: block;
`;

const linkStyles = css`
  text-decoration: none;
  flex: 1;
  color: ${(props) => props.theme.color.brownishGrey};
`;

const FooterExternalLink = styled.a`${linkStyles}`;
const FooterLocalLink = styled(Link)`
  ${linkStyles}
  text-align: right;  
`;

const Footer = () => (
  <FooterContainer>
    <FooterExternalLink target="_blank" rel="noopener noreferrer" href="https://ooloo.io/employers">
      ooloo.io
    </FooterExternalLink>
    <Link to="/">
      <SvgIcon />
    </Link>
    <FooterLocalLink to="/terms">Terms & Privacy</FooterLocalLink>
  </FooterContainer>
);

export default Footer;
