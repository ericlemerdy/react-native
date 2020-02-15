import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponents';

export default function App() {
  return (
    <Main />
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
