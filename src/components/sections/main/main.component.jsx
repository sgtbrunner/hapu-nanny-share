import React from 'react';

import Lead from '../../lead/lead.component';
import Divider from '../../divider/divider.component';
import CustomButton from '../../buttons/custom-button/custom-button.component';
import { ImageSection, FormSection } from './main.styles';
import ImageSection1 from '../../../assets/images/image-section-1.svg';
import ImageSection3 from '../../../assets/images/image-section-3.svg';

const mainSections = [
  {
    component: (
      <ImageSection direction="reverse">
        <img src={ImageSection1} alt="image-section-1" />
        <div>
          <h3>
            <span>Share your home,</span>
            <br />
            <span>nanny and costs</span>
          </h3>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu. <a>Hapu means tribe</a> and it’s our foundational 3 tribal
            principles that empowers you to create and manage your own tribe. A
            tribe that together has the power to create new affordable solutions
            in childcare that work for you and your community.
          </p>
          <a>Ready to get started?</a>
        </div>
      </ImageSection>
    ),
  },
  {
    component: (
      <FormSection>
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </p>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <CustomButton type="submit">Send</CustomButton>
        </form>
      </FormSection>
    ),
  },
  {
    component: (
      <ImageSection>
        <img
          src={ImageSection3}
          alt="image-section-3"
          style={{ maxWidth: 456, maxHeight: 336 }}
        />
        <div>
          <h3>Shared payments made simple</h3>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>
          <a>Read how Bridget’s share (without Hapu) ended over $15</a>
        </div>
      </ImageSection>
    ),
  },
];

const Main = () => (
  <main>
    <Lead />
    {mainSections.map(({ component }, index) => {
      const isLastSection = index === mainSections.length - 1;
      return (
        <div key={index}>
          {component}
          {!isLastSection && <Divider />}
        </div>
      );
    })}
  </main>
);

export default Main;
