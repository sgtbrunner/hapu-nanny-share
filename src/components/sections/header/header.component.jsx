import React from 'react';
import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger,
} from '@marvelapp/react-ab-test';

import NavBar from '../../nav-bar/nav-bar.component';
import {
  HeaderContainer,
  HeroContainer,
  HeroTitle,
  HeroPlay,
  HeroImageContainer,
} from './header.styles';
import { HiddenOnSmallScreens } from '../../../global.styles';
import LinkButton from '../../buttons/link-button/link-button.component';
import PlayButton from '../../../assets/icons/play-button.svg';
import HeroImage from '../../../assets/images/hero-image.svg';

const testName = 'hero section A/B test';
const testABVariants = [
  {
    name: 'design version',
    title: 'Easily create or join a local nanny share with Hapu',
    description:
      'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.',
  },
  {
    name: 'alternative version',
    title: 'Create the childcare you need at a price you can afford',
    description:
      'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.',
  },
];

experimentDebugger.enable();
emitter.defineVariants(
  testName,
  [testABVariants[0].name, testABVariants[1].name],
  [50, 50]
);

const Header = () => (
  <HeaderContainer>
    <NavBar />
    <HeroContainer>
      <div>
        <Experiment name={testName}>
          {testABVariants.map(({ name, title, description }) => (
            <Variant name={name} key={name}>
              <HeroTitle>
                <h1>{title}</h1>
                <h3>{description}</h3>
              </HeroTitle>
            </Variant>
          ))}
        </Experiment>
        <LinkButton>
          <HeroPlay>
            <img src={PlayButton} alt="play-button" />
            <a href="#link" id="link">
              See hapu in action (27 seconds)
            </a>
          </HeroPlay>
        </LinkButton>
      </div>
      <HiddenOnSmallScreens>
        <HeroImageContainer>
          <img src={HeroImage} alt="hero-image" />
        </HeroImageContainer>
      </HiddenOnSmallScreens>
    </HeroContainer>
  </HeaderContainer>
);

export default Header;
