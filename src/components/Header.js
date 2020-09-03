import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

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
        <NavLink to="/search?q=javascript">Search</NavLink>
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

const SvgIcon = styled.svg`
  display: block;
`;

const LogoIcon = () => (
  <Link to="/">
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="150px" height="36px">
      <g fill="none" fillRule="evenodd">
        <ellipse cx="83.118" cy="10.562" fill="#FF4500" rx="1.951" ry="1.938" />
        <ellipse cx="104.939" cy="10.562" fill="#FF4500" rx="1.951" ry="1.938" />
        <path
          fill="#1E2537"
          fillRule="nonzero"
          d="M55.256 18.825c.957 0 1.51-.713 1.473-1.408a5.076 5.076 0 00-.092-.786c-.59-2.522-2.65-4.387-5.098-4.387-2.908 0-5.263 2.614-5.263 5.831 0 3.218 2.355 5.832 5.263 5.832 1.822 0 3.129-.658 4.067-1.7a1.127 1.127 0 00-.184-1.682c-.46-.31-1.03-.201-1.454.146-.404.348-1.177 1.042-2.429 1.042-1.472 0-2.723-1.261-3-2.925h6.717v.037zm-3.735-4.37c1.325 0 2.466 1.025 2.89 2.432h-5.78c.424-1.426 1.565-2.431 2.89-2.431zm-5.135-1.06a1.1 1.1 0 00-.92-1.078c-1.6-.237-3.11.347-3.975 1.426v-.146c0-.677-.552-1.097-1.104-1.097a1.104 1.104 0 00-1.104 1.097v8.957c0 .585.441 1.097 1.03 1.133a1.099 1.099 0 001.178-1.097v-4.624c0-2.048 1.546-3.73 3.68-3.492h.222a1.08 1.08 0 00.993-1.078zm37.836 1.17a1.103 1.103 0 00-2.208.001v8.024a1.103 1.103 0 001.104 1.097 1.103 1.103 0 001.104-1.097v-8.024zM67.807 8.498a1.104 1.104 0 00-2.208 0v4.88c-.755-.75-1.693-1.115-2.816-1.115-2.907 0-5.263 2.614-5.263 5.832 0 3.217 2.356 5.831 5.263 5.831 1.123 0 2.08-.384 2.834-1.134.092.513.552.896 1.086.896a1.103 1.103 0 001.104-1.097V8.497zM62.802 21.75c-1.694 0-3.055-1.626-3.055-3.655 0-2.011 1.361-3.656 3.055-3.656 1.693 0 3.055 1.627 3.055 3.656s-1.38 3.655-3.055 3.655zM79.327 8.497a1.103 1.103 0 00-2.208 0v4.88c-.754-.75-1.693-1.115-2.816-1.115-2.907 0-5.263 2.614-5.263 5.832 0 3.217 2.356 5.831 5.263 5.831 1.123 0 2.08-.384 2.834-1.134.092.513.552.896 1.086.896a1.102 1.102 0 001.104-1.097V8.497zm-5.024 13.252c-1.693 0-3.054-1.626-3.054-3.655 0-2.011 1.361-3.656 3.054-3.656 1.693 0 3.055 1.627 3.055 3.656s-1.362 3.655-3.055 3.655zm15.514.86v-8.153h.975c.516 0 .976-.384 1.012-.914a.984.984 0 00-.975-1.042h-1.012v-1.536c0-.585-.442-1.096-1.03-1.133a1.1 1.1 0 00-1.178 1.097v1.59h-.92c-.516 0-.976.384-1.013.914a.984.984 0 00.976 1.042h.938v8.153a1.104 1.104 0 001.104 1.097c.645-.037 1.123-.512 1.123-1.115zm43.717-3.784c.957 0 1.51-.713 1.473-1.408a5.076 5.076 0 00-.092-.786c-.59-2.522-2.65-4.387-5.098-4.387-2.908 0-5.263 2.614-5.263 5.831 0 3.218 2.355 5.832 5.263 5.832 1.822 0 3.129-.658 4.067-1.7a1.127 1.127 0 00-.184-1.682c-.46-.31-1.03-.201-1.454.146-.405.348-1.177 1.042-2.43 1.042-1.471 0-2.722-1.261-2.999-2.925h6.717v.037zm-3.735-4.37c1.325 0 2.466 1.025 2.89 2.432h-5.78c.424-1.426 1.565-2.431 2.89-2.431zm13.725-1.079c0-.548-.405-.987-.92-1.078-1.601-.238-3.11.347-3.975 1.426v-.147c0-.676-.552-1.096-1.104-1.096a1.101 1.101 0 00-1.104 1.096v8.957c0 .585.441 1.097 1.03 1.134a1.1 1.1 0 001.178-1.097v-4.625c0-2.047 1.546-3.729 3.68-3.491h.221c.552-.037.994-.512.994-1.079zm-37.484 1.083a1.103 1.103 0 00-1.104-1.096 1.103 1.103 0 00-1.104 1.096v8.025a1.104 1.104 0 002.208 0V14.46zm-6.175-4.704c.59.036 1.03.548 1.03 1.133v1.536h1.013a.984.984 0 01.975 1.042c-.036.53-.496.914-1.012.914h-.975v8.153c0 .603-.478 1.078-1.123 1.115a1.104 1.104 0 01-1.104-1.097v-8.153h-.938a.983.983 0 01-.975-1.042c.036-.53.496-.914 1.011-.914h.92v-1.59a1.1 1.1 0 011.178-1.097zm19.155 2.49c.442 0 .894.074 1.353.222.469.15.897.397 1.284.739.389.343.707.787.956 1.33.25.547.374 1.21.374 1.989v5.897c0 .352-.102.642-.31.857-.208.216-.487.324-.819.324-.332 0-.61-.108-.82-.324-.207-.215-.308-.505-.308-.857v-5.957c0-.703-.182-1.245-.54-1.637-.355-.387-.852-.581-1.512-.581-.659 0-1.152.194-1.499.58-.353.391-.532.934-.532 1.638v5.957c0 .352-.101.642-.31.857-.208.216-.486.324-.818.324-.332 0-.61-.108-.82-.324-.207-.215-.309-.505-.309-.857v-5.957c0-.703-.182-1.245-.54-1.637-.354-.387-.852-.581-1.511-.581-.66 0-1.153.194-1.5.58-.353.391-.531.934-.531 1.638v5.957c0 .352-.102.642-.31.857-.208.216-.487.324-.819.324-.332 0-.61-.108-.82-.324-.207-.215-.308-.505-.308-.857v-8.996c0-.352.101-.642.309-.857.209-.216.487-.324.82-.324.331 0 .61.108.818.324.149.154.243.345.285.57l.008.061.132-.132c.089-.082.187-.16.295-.233l.168-.106c.233-.137.502-.252.809-.344a3.87 3.87 0 011.107-.14c.562 0 1.12.14 1.67.416.436.22.83.573 1.184 1.056l.1.142.15-.182c.253-.295.529-.549.826-.762l.227-.153c.551-.346 1.24-.517 2.061-.517z"
        />
        <g fillRule="nonzero">
          <path
            fill="#1E2537"
            d="M15.522 0c8.56 0 15.562 6.914 15.562 15.418 0 3.497-1.2 6.716-3.16 9.3l6.76 6.715c1 .993 1 2.583 0 3.576-.48.517-1.16.755-1.8.755-.64 0-1.32-.278-1.8-.755l-6.801-6.755-.05-.05-.03-.03a15.536 15.536 0 01-8.681 2.663C6.96 30.837 0 23.922 0 15.418 0 6.914 6.96 0 15.522 0zm-.006.992C7.48.992.966 7.446.966 15.407c0 7.962 6.514 14.416 14.55 14.416 8.035 0 14.549-6.454 14.549-14.416 0-7.961-6.514-14.415-14.55-14.415z"
          />
          <path
            fill="#FFF"
            d="M18.915 21.479c-.87.864-2.272 1.03-3.45 1.03-1.175 0-2.578-.166-3.447-1.03m9.558-13.673l-4.407-1.03-1.712 5.188 1.712-5.189m7.943 1.385c0 .953-.778 1.726-1.738 1.726s-1.737-.773-1.737-1.726a1.733 1.733 0 011.737-1.688c.945 0 1.716.75 1.738 1.688zM5.568 17.494a2.186 2.186 0 01.13-4.063 2.213 2.213 0 012.442.65m14.616.044a2.213 2.213 0 012.45-.702 2.19 2.19 0 011.477 2.066c0 .903-.559 1.714-1.406 2.041"
          />
          <path
            fill="#1E2537"
            d="M15.418 25.404c-5.743 0-10.416-3.097-10.416-6.904 0-.263.022-.523.066-.779a2.616 2.616 0 01-1.254-2.232 2.634 2.634 0 012.639-2.622c.65 0 1.27.237 1.749.659 1.807-1.152 4.237-1.877 6.918-1.927l1.76-5.336.384.09.009.003 4.102.959a2.176 2.176 0 012-1.313 2.168 2.168 0 012.172 2.158 2.168 2.168 0 01-2.173 2.159 2.17 2.17 0 01-2.173-2.156l-3.742-.875-1.426 4.32c2.584.1 4.917.827 6.658 1.954a2.64 2.64 0 011.79-.694 2.632 2.632 0 012.638 2.621 2.6 2.6 0 01-1.34 2.284c.037.24.057.481.057.727-.001 3.807-4.674 6.904-10.418 6.904zM5.96 17.682a3.88 3.88 0 00-.087.818c0 3.33 4.282 6.039 9.545 6.039 5.264 0 9.546-2.71 9.546-6.039a3.84 3.84 0 00-.08-.781.429.429 0 01-.043-.189c-.292-1.136-1.086-2.167-2.234-2.999a.425.425 0 01-.187-.131c-1.744-1.192-4.237-1.939-7.002-1.939-2.736 0-5.208.733-6.95 1.904a.426.426 0 01-.175.12c-1.172.832-1.987 1.87-2.29 3.017a.413.413 0 01-.036.166l-.007.014zm17.46-3.598c1.009.802 1.75 1.757 2.129 2.806.442-.331.701-.85.699-1.401a1.764 1.764 0 00-1.769-1.756 1.767 1.767 0 00-1.06.35zm-16.968-.351c-.976 0-1.767.786-1.768 1.756 0 .525.235 1.012.625 1.34.392-1.04 1.14-1.987 2.154-2.782a1.78 1.78 0 00-1.011-.314zm16.92-6.867c-.717 0-1.301.58-1.301 1.294 0 .713.584 1.293 1.302 1.293.717 0 1.302-.58 1.302-1.293s-.584-1.294-1.302-1.294zm-7.907 16.076c-1.744 0-2.973-.379-3.756-1.157a.43.43 0 010-.612.438.438 0 01.616 0c.612.608 1.638.904 3.14.904 1.5 0 2.528-.296 3.14-.904a.437.437 0 01.729.194.431.431 0 01-.113.418c-.784.778-2.012 1.157-3.756 1.157z"
          />
          <path
            fill="#FF4500"
            d="M18.997 15.623c-.888 0-1.633.738-1.633 1.62 0 .88.745 1.595 1.633 1.595a1.6 1.6 0 001.605-1.595c0-.882-.719-1.62-1.605-1.62zm-7.036 0c-.886 0-1.63.74-1.63 1.62 0 .88.743 1.595 1.63 1.595.887 0 1.606-.715 1.606-1.595s-.72-1.62-1.606-1.62z"
          />
        </g>
      </g>
    </SvgIcon>
  </Link>
);

const Header = () => (
  <HeaderContainer>
    <LogoIcon />
    <Navigation />
  </HeaderContainer>
);

export default Header;
