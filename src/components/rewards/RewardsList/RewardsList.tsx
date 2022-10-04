import * as React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {Reward} from '~types';

import RewardItem from './RewardItem';

interface Props {
  rewards: Reward[];
}

const RewardsList = ({rewards}: Props) => {
  const renderItem = ({item}: {item: Reward}) => <RewardItem reward={item} />;
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={rewards}
      style={styles.list}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 25,
  },
  separator: {
    height: 20,
  },
});

export default RewardsList;
