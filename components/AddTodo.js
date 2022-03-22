import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AddTodo = () => {
  return (
    <View style={styles.block}>
      <Text>AddTodo</Text>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});
