import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {spanishMonth} from '../data/spanishMonth';

const DateHead = ({date}) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const formatted = `${day} de ${spanishMonth[month]}, ${year}`;

  return (
    <>
      <StatusBar />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
};

export default DateHead;

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#fff59d',
  },
  dateText: {
    fontSize: 24,
  },
});
