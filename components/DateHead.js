import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {spanishMonth} from '../data/spanishMonth';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DateHead = ({date}) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formatted = `${day} de ${spanishMonth[month]}, ${year}`;
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#cbc26d" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
};

export default DateHead;

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#cbc26d',
  },
  block: {
    padding: 16,
    backgroundColor: '#fff59d',
  },
  dateText: {
    fontSize: 24,
  },
});
