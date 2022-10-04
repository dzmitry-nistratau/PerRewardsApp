import * as React from 'react';
import {Text as NativeText, TextProps} from 'react-native';

interface Props extends TextProps {
  color?: 'white' | 'black' | string;
}

const Text = ({color = 'black', style, ...props}: Props) => (
  <NativeText style={[{color: color}, style]} {...props} />
);

export default Text;
