import React from 'react';
import Badge from '../../assets/icons/badge.svg';

import { NavBarContainer, NavBarImage, NavBarList } from './nav-bar.styles';
import { HiddenOnMobile } from '../../global.styles';
import LinkButton from '../buttons/link-button/link-button.component';
import CustomButton from '../buttons/custom-button/custom-button.component';

const NavBar = () => (
  <NavBarContainer>
    <NavBarList>
      <NavBarImage src={Badge} alt="badge" />
      <HiddenOnMobile>
        <li>
          <LinkButton>Create Your Nanny Share</LinkButton>
        </li>
      </HiddenOnMobile>
      <HiddenOnMobile>
        <li>
          <LinkButton>Browse Shares</LinkButton>
        </li>
      </HiddenOnMobile>
      <HiddenOnMobile>
        <li>
          <LinkButton>Our Story</LinkButton>
        </li>
      </HiddenOnMobile>
    </NavBarList>
    <NavBarList>
      <li>
        <CustomButton>Become a Nanny Share Host</CustomButton>
      </li>
      <HiddenOnMobile>
        <li>
          <LinkButton>Sign In</LinkButton>
        </li>
      </HiddenOnMobile>
    </NavBarList>
  </NavBarContainer>
);

export default NavBar;
