import React, {FC, ReactNode} from 'react';

import {MarketingButton} from 'components';
import {SocialMedia} from 'types/social-media';

import './Social.scss';

const Social: FC = () => {
  const renderSocialButtons = (): ReactNode => (
    <div className="Social__button-container">
      <MarketingButton website={SocialMedia.slack} />
      <MarketingButton website={SocialMedia.github} />
      <MarketingButton website={SocialMedia.youtube} />
      <MarketingButton website={SocialMedia.reddit} />
      <MarketingButton website={SocialMedia.linkedin} />
      <MarketingButton website={SocialMedia.facebook} />
      <MarketingButton website={SocialMedia.twitter} />
    </div>
  );

  return (
    <div className="Social">
      <div className="Social__heading-container">
        <h1 className="Social__heading">
          <b>Join the Community</b>
        </h1>
        <h2 className="Social__subtext">
          Explore ways to get involved, and stay up-to-date with the latest announcements and events.
        </h2>
      </div>
      {renderSocialButtons()}
    </div>
  );
};

export default Social;
