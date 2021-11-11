import React from 'react';
import Badge from '../../assets/icons/badge.svg';

import { NavBarContainer, NavBarImage, NavBarList } from './nav-bar.styles';
import { HiddenOnSmallScreens } from '../../global.styles';
import LinkButton from '../buttons/link-button/link-button.component';
import CustomButton from '../buttons/custom-button/custom-button.component';

const NavBar = () => (
  <NavBarContainer>
    <NavBarList>
      <NavBarImage src={Badge} alt="badge" />
      <HiddenOnSmallScreens>
        <li>
          <LinkButton>Create Your Nanny Share</LinkButton>
        </li>
      </HiddenOnSmallScreens>
      <HiddenOnSmallScreens>
        <li>
          <LinkButton>Browse Shares</LinkButton>
        </li>
      </HiddenOnSmallScreens>
      <HiddenOnSmallScreens>
        <li>
          <LinkButton>Our Story</LinkButton>
        </li>
      </HiddenOnSmallScreens>
    </NavBarList>
    <NavBarList>
      <li>
        <CustomButton>Become a Nanny Share Host</CustomButton>
      </li>
      <HiddenOnSmallScreens>
        <li>
          <LinkButton>Sign In</LinkButton>
        </li>
      </HiddenOnSmallScreens>
    </NavBarList>
  </NavBarContainer>
);

export default NavBar;
