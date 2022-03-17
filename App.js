import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DateHead from './components/DateHead';

const App = () => {
  const today = new Date();

  return (
    <SafeAreaView>
      <DateHead date={today} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
