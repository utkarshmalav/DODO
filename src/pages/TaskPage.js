import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, You are on TaskPage</Text>
    </View>
  );
};

export default TaskPage;

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
