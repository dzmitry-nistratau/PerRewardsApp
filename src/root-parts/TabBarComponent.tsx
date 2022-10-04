import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from '@rneui/themed';

import {Text} from '~components';

const user = {
  name: 'Jane',
  surname: 'Doe',
  given: 100,
  received: 250,
};

const TabBarComponent = () => (
  <View style={styles.container}>
    <Image
      source={require('../../assets/images/image3.jpg')}
      style={styles.image}
      placeholderStyle={styles.imagePlaceholder}
      resizeMode="stretch"
    />
    <View style={styles.textWrapper}>
      <View style={styles.nameWrapper}>
        <Text
          color="white"
          style={styles.name}>{`${user.name} ${user.surname}`}</Text>
      </View>
      <Text color="white">
        Given{' '}
        <Text color="white" style={styles.amount}>
          ${user.given}
        </Text>{' '}
        / Received{' '}
        <Text color="white" style={styles.amount}>
          ${user.received}
        </Text>
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  imagePlaceholder: {
    backgroundColor: 'transparent',
  },
  textWrapper: {
    paddingHorizontal: 10,
  },
  nameWrapper: {
    paddingBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontWeight: 'bold',
  },
});

export default TabBarComponent;
