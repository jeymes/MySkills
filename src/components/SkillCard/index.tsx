import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity 
    {...rest}
    style={styles.buttonSkill}>
    <Text style={styles.textSkill}>
      {skill}
    </Text>
    </TouchableOpacity>
  );
}