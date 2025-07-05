import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoneyPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, You are on MoneyPage</Text>
    </View>
  );
};

export default MoneyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
});
