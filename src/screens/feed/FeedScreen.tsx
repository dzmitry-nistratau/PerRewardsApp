import React from 'react';
import {ScreenLayout} from '~components';
import {RewardsList} from '~components/rewards/RewardsList';

import {rewards} from '~mockData';

function FeedScreen() {
  return (
    <ScreenLayout>
      <RewardsList rewards={rewards} />
    </ScreenLayout>
  );
}

export default FeedScreen;
