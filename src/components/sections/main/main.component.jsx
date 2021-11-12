import React from 'react';

import Lead from '../../lead/lead.component';
import Divider from '../../divider/divider.component';
import CustomButton from '../../custom-button/custom-button.component';
import { ImageSection, FormSection } from './main.styles';
import ImageSection1 from '../../../assets/images/image-section-1.svg';
import ImageSection3 from '../../../assets/images/image-section-3.svg';
import ImageSection4 from '../../../assets/images/image-section-4.svg';
import ImageSection5 from '../../../assets/images/image-section-5.svg';
import { HiddenOnSmallScreens } from '../../../global.styles';

const mainSections = [
  {
    component: (
      <ImageSection orientation="reverse" paddingY={120}>
        <img
          src={ImageSection1}
          alt="image-section-1"
          style={{ maxWidth: 584 }}
        />
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
            Hapu. <a style={{ padding: 0 }}>Hapu means tribe</a> and it’s our
            foundational 3 tribal principles that empowers you to create and
            manage your own tribe. A tribe that together has the power to create
            new affordable solutions in childcare that work for you and your
            community.
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
  {
    component: (
      <ImageSection direction="column">
        <h3>A framework built for the long term</h3>
        <p>
          Childcare is for the long term. And you need a framework you can count
          on that gives your share long term viability and success. That’s why
          we’ve defined Hapu around our three tribal principles; clearly defined
          process, transparency over money and equality of participation.
        </p>
        <a>Read how Hapu’s tribal background defines our app</a>
        <HiddenOnSmallScreens>
          <img src={ImageSection4} alt="ImageSection4" />
        </HiddenOnSmallScreens>
      </ImageSection>
    ),
  },
  {
    component: (
      <ImageSection direction="column">
        <img
          src={ImageSection5}
          alt="ImageSection5"
          style={{ maxWidth: 216, maxHeight: 96, marginBottom: 30 }}
        />
        <h3>Coming soon: Nanny Share Daily Diary!</h3>
        <p>
          With the Hapu daily diary your nanny will be able to update you and
          your sharers with photos and commentary of the day. You and sharers
          will receive notifications and you’ll be able to login to view the
          daily adventures fo your little ones. We can’t wait!
        </p>
        <HiddenOnSmallScreens></HiddenOnSmallScreens>
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
