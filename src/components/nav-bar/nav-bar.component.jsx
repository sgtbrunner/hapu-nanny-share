import React from 'react';
import Badge from '../../assets/icons/badge.svg';

import { WHITE } from '../../utils/constants.utils';
import { HiddenOnSmallScreens } from '../../global.styles';
import { NavBarContainer, NavBarLeftLinks, NavBarList } from './nav-bar.styles';
import Link from '../link/link.component';
import CustomButton from '../custom-button/custom-button.component';

const links = [
  {
    text: 'Create Your Nanny Share',
    url: '',
  },
  {
    text: 'Browse Shares',
    url: '',
  },
  {
    text: 'Our Story',
    url: '',
  },
];

const NavBar = () => (
  <NavBarContainer>
    <NavBarLeftLinks>
      <img src={Badge} alt="badge" />
      <HiddenOnSmallScreens>
        <NavBarList>
          {links.map(({ text, url }) => (
            <li key={text}>
              <Link to={url} textColor={WHITE}>
                {text}
              </Link>
            </li>
          ))}
        </NavBarList>
      </HiddenOnSmallScreens>
    </NavBarLeftLinks>
    <NavBarList>
      <li>
        <CustomButton>Become a Nanny Share Host</CustomButton>
      </li>
      <li>
        <HiddenOnSmallScreens>
          <Link textColor={WHITE}>Sign In</Link>
        </HiddenOnSmallScreens>
      </li>
    </NavBarList>
  </NavBarContainer>
);

export default NavBar;
