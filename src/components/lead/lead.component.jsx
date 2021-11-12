import React from 'react';

import Link from '../link/link.component';
import { LeadContainer, LeadContent, LeadIcon, LeadText } from './lead.styles';
import { ProfileIcon } from '../../assets/icons';

const Lead = () => (
  <LeadContainer>
    <LeadContent>
      <LeadIcon src={ProfileIcon} alt="profile-icon"></LeadIcon>
      <Link decoration>Sarah’s day care available now in North Sydney</Link>
      <LeadText>Wednesday, Thursday, Friday - 7:30 - 5:30</LeadText>
    </LeadContent>
  </LeadContainer>
);

export default Lead;
