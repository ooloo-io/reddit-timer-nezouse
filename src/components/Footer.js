import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 25rem;

  font-size: ${(props) => props.theme.font.size.small};
`;

const SvgIcon = styled.svg`
  display: block;
`;

const linkStyles = css`
  text-decoration: none;
  color: ${(props) => props.theme.color.brownishGrey};
`;

const FooterLocalLink = styled(Link)`${linkStyles}`;
const FooterExternalLink = styled.a`${linkStyles}`;

const FooterIcon = () => (
  <Link to="/">
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36px" height="36px">
      <g fill="none">
        <path
          fill="#1E2537"
          d="M15.42 0c8.5 0 15.46 6.91 15.46 15.42 0 3.5-1.2 6.71-3.14 9.3l6.71 6.71c1 1 1 2.59 0 3.58-.47.52-1.15.75-1.79.75a2.6 2.6 0 01-1.78-.75l-6.76-6.76-.08-.08a15.36 15.36 0 01-8.62 2.67C6.92 30.84 0 23.92 0 15.42S6.91 0 15.42 0zm0 1A14.43 14.43 0 00.95 15.4c0 7.97 6.47 14.42 14.45 14.42s14.45-6.45 14.45-14.41S23.4.99 15.41.99z"
        />
        <path
          fill="#FFF"
          d="M18.79 21.48c-.87.86-2.26 1.03-3.43 1.03-1.17 0-2.56-.17-3.42-1.03m9.5-13.67l-4.39-1.03-1.7 5.18 1.7-5.19m7.9 1.39a1.73 1.73 0 01-3.46 0 1.73 1.73 0 013.45 0zM5.52 17.49a2.19 2.19 0 112.56-3.4m14.51.04a2.19 2.19 0 112.5 3.4"
        />
        <path
          fill="#1E2537"
          d="M15.31 25.4c-5.7 0-10.34-3.1-10.34-6.9 0-.26.02-.52.06-.78a2.62 2.62 0 113.12-4.2 13.3 13.3 0 016.87-1.92l1.75-5.34.38.1 4.08.96a2.16 2.16 0 11-.17.84l-3.72-.87-1.41 4.32c2.56.1 4.88.82 6.61 1.95a2.62 2.62 0 113.07 4.21c.03.24.05.48.05.73 0 3.8-4.64 6.9-10.35 6.9zm-9.39-7.72c-.06.27-.09.54-.09.82 0 3.33 4.26 6.04 9.48 6.04s9.49-2.71 9.49-6.04a3.84 3.84 0 00-.13-.97 5.51 5.51 0 00-2.4-3.13 12.45 12.45 0 00-6.96-1.94 12.5 12.5 0 00-7.07 2.02 5.56 5.56 0 00-2.31 3.19l-.01.01zm17.34-3.6c1 .8 1.74 1.76 2.12 2.81a1.76 1.76 0 00-2.12-2.8zm-16.85-.35a1.76 1.76 0 00-1.14 3.1 6.54 6.54 0 012.14-2.78c-.3-.2-.64-.32-1-.32zm16.8-6.86a1.3 1.3 0 10.01 2.59 1.3 1.3 0 000-2.6zm-7.85 16.07c-1.73 0-2.95-.38-3.73-1.16a.43.43 0 11.61-.61c.61.61 1.63.9 3.12.9 1.5 0 2.51-.29 3.12-.9.11-.1.27-.15.42-.1a.43.43 0 01.2.72c-.79.77-2 1.15-3.74 1.15z"
        />
        <path
          fill="#FF4500"
          d="M18.87 15.62c-.88 0-1.62.74-1.62 1.62 0 .88.74 1.6 1.62 1.6.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.62-1.6-1.62zm-6.99 0c-.88 0-1.62.74-1.62 1.62 0 .88.74 1.6 1.62 1.6.88 0 1.6-.72 1.6-1.6s-.72-1.62-1.6-1.62z"
        />
      </g>
    </SvgIcon>
  </Link>
);

const Footer = () => (
  <FooterContainer>
    <FooterExternalLink target="_blank" rel="noopener noreferrer" href="https://ooloo.io/employers">
      ooloo.io
    </FooterExternalLink>
    <FooterIcon />
    <FooterLocalLink to="/terms">Terms & Privacy</FooterLocalLink>
  </FooterContainer>
);

export default Footer;
