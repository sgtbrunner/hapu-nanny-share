import React from 'react';

import NavBar from '../nav-bar/nav-bar.component';
import {
  HeaderContainer,
  HeroContainer,
  HeroTitle,
  HeroPlay,
  HeroImageContainer,
} from './header.styles';
import { HiddenOnMobile } from '../../global.styles';
import LinkButton from '../buttons/link-button/link-button.component';
import PlayButton from '../../assets/icons/play-button.svg';
import HeroImage from '../../assets/images/hero-image.svg';

const Header = () => (
  <HeaderContainer>
    <NavBar />
    <HeroContainer>
      <div>
        <HeroTitle>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <h3>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </h3>
        </HeroTitle>
        <LinkButton>
          <HeroPlay>
            <img src={PlayButton} alt="play-button" />
            <a href="#link" id="link">
              See hapu in action (27 seconds)
            </a>
          </HeroPlay>
        </LinkButton>
      </div>
      <HiddenOnMobile>
        <HeroImageContainer>
          <img src={HeroImage} alt="hero-image" />
        </HeroImageContainer>
      </HiddenOnMobile>
    </HeroContainer>
  </HeaderContainer>
);

export default Header;
