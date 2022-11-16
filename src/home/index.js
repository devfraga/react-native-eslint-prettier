import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exemplo config Eslint / Prettier</Text>
      <Button
        style={styles.styles}
        title="Navegar para detalhes"
        onPress={() => navigate.navigate('Detail')}
      />
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
    fontSize: 20,
    color: '#000',
    marginBottom: 24,
  },
});
