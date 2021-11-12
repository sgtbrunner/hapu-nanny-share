import React from 'react';

import { GREY } from '../../../utils/constants.utils';
import CustomButton from '../../custom-button/custom-button.component';
import Icon from '../../icon/icon.component';
import Link from '../../link/link.component';
import {
  FooterContainer,
  FooterSubTitle,
  FooterLinkBar,
  TextLinksContainer,
  IconLinksContainer,
  CopyrightText,
} from './footer.styles';
import {
  Union,
  HapuLogo,
  Facebook,
  Instagram,
  Twitter,
} from '../../../assets/icons';

const textLinks = [
  { text: 'Share Your Nanny', url: '' },
  { text: 'Our Story', url: '' },
  { text: 'Blog', url: '' },
  { text: 'Terms & Privacy', url: '' },
];

const iconLinks = [
  { icon: Facebook, name: 'Facebook', url: '' },
  { icon: Instagram, name: 'Instagram', url: '' },
  { icon: Twitter, name: 'Twitter', url: '' },
];

const Footer = () => (
  <FooterContainer>
    <h3>Become a nanny share host</h3>
    <FooterSubTitle>Takes less than 5 minutes to get started</FooterSubTitle>
    <CustomButton color="secondary">
      <img src={Union} alt="union-icon" />
      <div>
        <p>Create Your Nanny Share</p>
        <p>Takes less than 5 minutes</p>
      </div>
    </CustomButton>
    <Link decoration>Or browse local nanny-shares</Link>
    <FooterLinkBar>
      <img src={HapuLogo} alt="hapu-logo" />
      <TextLinksContainer>
        {textLinks.map(({ text, url }) => (
          <li key={text}>
            <Link textColor={GREY} to={url}>
              {text}
            </Link>
          </li>
        ))}
      </TextLinksContainer>
      <IconLinksContainer>
        {iconLinks.map(({ icon, name, url }) => (
          <li key={name}>
            <Link textColor={GREY} to={url}>
              <Icon>
                <img src={icon} alt={name}></img>
              </Icon>
            </Link>
          </li>
        ))}
      </IconLinksContainer>
    </FooterLinkBar>
    <CopyrightText>
      Copyright © 2017 Hapu PTY Limited All rights reserved
    </CopyrightText>
  </FooterContainer>
);

export default Footer;
