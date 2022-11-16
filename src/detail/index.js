import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Projeto base</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#000',
    marginBottom: 24,
  },
});
