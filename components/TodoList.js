import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} text={item.text} done={item.done} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;
