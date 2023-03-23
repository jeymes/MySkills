import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
    {...rest}
    style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}