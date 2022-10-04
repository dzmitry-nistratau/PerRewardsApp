import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from '@rneui/themed';

import {Text} from '~components';
import {Reward} from '~types';

import Images from '../../../../assets/images/images';

const RewardItem = ({reward}: {reward: Reward}) => {
  const img = Images[reward.image];

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.image}
        placeholderStyle={styles.imagePlaceholder}
        resizeMode="stretch"
      />
      <View style={styles.sideWrapper}>
        <Text style={styles.text}>{reward.text}</Text>
        <View style={styles.bottomTextWrapper}>
          <Text
            style={
              styles.bottomText
            }>{`${reward.awardedName} Rewarded by ${reward.rewardingName}`}</Text>
          <Text style={styles.bottomText}>{reward.time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  imagePlaceholder: {
    backgroundColor: 'transparent',
  },
  sideWrapper: {
    flex: 1,
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: 'bold',
  },
  bottomTextWrapper: {
    paddingTop: 8,
  },
  bottomText: {
    fontSize: 12,
    color: '#0F3D3E',
  },
});

export default RewardItem;
