import React from 'react';
import {ScreenLayout} from '~components';
import {RewardsList} from '~components/rewards/RewardsList';

import {rewards, currentUserId} from '~mockData';

const filteredRewards = rewards.filter(
  reward => reward.awardedId === currentUserId,
);

function MyRewardsScreen() {
  return (
    <ScreenLayout>
      <RewardsList rewards={filteredRewards} />
    </ScreenLayout>
  );
}

export default MyRewardsScreen;
