import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const AddTodo = () => {
  return (
    <View style={styles.block}>
      <TextInput placeholder="¿Qué tengo que hacer?" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertival: 8,
  },
});

export default AddTodo;
