import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const TitleComponent = ({ title }) => {
  return (
    <Text style={styles.title}>{title}</Text>
  );
};

export default TitleComponent;
