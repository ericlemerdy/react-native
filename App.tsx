import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Main from './components/MainComponents';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#8B5BF1', '#D1489E']} start={[0, 100]} end={[100, 0]}>
      <Main />
    </LinearGradient>
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
