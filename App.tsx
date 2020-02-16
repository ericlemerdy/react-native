import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MainNavigator } from './components/MainNavigatorComponent';

export default function App() {
  return (
    <MainNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
