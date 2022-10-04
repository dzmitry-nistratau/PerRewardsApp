import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const ScreenLayout: FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={[styles.bottomSafeArea]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSafeArea: {
    backgroundColor: '#F1F1F1',
    flex: 1,
  },
});

export default ScreenLayout;
