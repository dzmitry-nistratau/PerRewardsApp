import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {FeedScreen, MyRewardsScreen} from '~screens';

const Tab = createMaterialTopTabNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {textTransform: 'none'},
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomWidth: 0,
          backgroundColor: '#E2DCC8',
          overflow: 'hidden',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#F1F1F1',
          height: '100%',
        },
        tabBarActiveTintColor: '#0F3D3E',
      }}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="My Rewards" component={MyRewardsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
