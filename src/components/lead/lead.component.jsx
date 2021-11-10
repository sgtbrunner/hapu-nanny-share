import React from 'react';

import {
  LeadContainer,
  LeadContent,
  LeadIcon,
  LeadLink,
  LeadText,
} from './lead.styles';
import ProfileIcon from '../../assets/images/profile-icon.svg';

const Lead = () => (
  <LeadContainer>
    <LeadContent>
      <LeadIcon src={ProfileIcon} alt="profile-icon"></LeadIcon>
      <LeadLink>Sarah’s day care available now in North Sydney</LeadLink>
      <LeadText>Wednesday, Thursday, Friday - 7:30 - 5:30</LeadText>
    </LeadContent>
  </LeadContainer>
);

export default Lead;
