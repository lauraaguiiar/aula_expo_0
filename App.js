import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './components/exemplo_1';

import Exemplo2 from './components/exemplo_2';

import Exemplo_3 from './components/exemplo_3';

import Atividade_1 from './components/atividade_1';

import Atividade_2 from './components/atividade_2';
import Atividade_3 from './components/atividade_3';
import Exemplo_4 from './components/exemplo_4';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_4/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e80744',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
