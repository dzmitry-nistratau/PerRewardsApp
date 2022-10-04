import * as React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input} from '@rneui/themed';

import {Text} from '~components';

interface Props {
  onGiveRewardPress: () => void;
}

const RewardForm = ({onGiveRewardPress}: Props) => (
  <View style={styles.container}>
    <Text color="white" style={styles.title}>
      Give reward
    </Text>
    <View style={styles.formContainer}>
      <Input label="To" labelStyle={styles.input} inputStyle={styles.input} />
      <Input
        label="Amount"
        labelStyle={styles.input}
        inputStyle={styles.input}
        keyboardType="decimal-pad"
        returnKeyType="done"
      />
      <Input
        label="Message"
        labelStyle={styles.input}
        inputStyle={styles.input}
        multiline={true}
      />
    </View>
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.button}
      onPress={onGiveRewardPress}>
      <Text style={styles.buttonText}>Give</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  title: {
    fontSize: 26,
  },
  formContainer: {
    width: '100%',
    paddingTop: 30,
  },
  inputContainer: {
    borderColor: 'E2DCC8',
  },
  input: {
    color: '#E2DCC8',
  },
  button: {
    marginVertical: 15,
    borderRadius: 25,
    width: '80%',
    backgroundColor: '#F1F1F1',
  },
  buttonText: {
    padding: 15,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RewardForm;
