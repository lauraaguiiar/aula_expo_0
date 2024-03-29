import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './components/exemplo_1';

import Exemplo2 from './components/exemplo_2';

import Atividade_1 from './components/atividade_1';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo2/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#867ede',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
