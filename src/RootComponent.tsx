import React, {useState, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  LayoutChangeEvent,
} from 'react-native';
import {Icon} from '@rneui/themed';

import RootNavigator from '~navigation';

import {TabBarComponent, RewardForm} from './root-parts';

const RootComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const bottom = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-cardHeight, 0],
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;

    setCardHeight(height);
  };

  const onGiveRewardPress = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();

    setIsModalVisible(false);
  }, [animatedValue]);

  const onAddButtonPress = () => {
    if (!isModalVisible) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.bezier(0.28, 0, 0.63, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start();
    }

    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <StatusBar barStyle="light-content" />
      <View style={[styles.container, styles.mainContainer]}>
        <TabBarComponent />
        <View onLayout={onLayout} style={styles.container}>
          <Animated.View
            style={[
              styles.formContainer,
              {
                bottom,
              },
            ]}>
            <RewardForm onGiveRewardPress={onGiveRewardPress} />
          </Animated.View>
          <View style={styles.container}>
            <RootNavigator />
          </View>
          <TouchableOpacity
            accessibilityRole="button"
            style={styles.button}
            onPress={onAddButtonPress}>
            {isModalVisible ? (
              <Icon size={35} name="close" color="#F1F1F1" />
            ) : (
              <Icon size={35} name="add" color="#F1F1F1" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: '#100F0F',
  },
  container: {flex: 1},
  mainContainer: {
    backgroundColor: '#100F0F',
  },
  button: {
    position: 'absolute',
    bottom: 60,
    right: 40,
    zIndex: 2,
    width: 60,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#0F3D3E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    height: '100%',
    backgroundColor: '#0F3D3E',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default RootComponent;
