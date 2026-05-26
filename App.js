import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from './src/components/Botao'
import Visor from './src/components/Visor'
import { useFonts, Orbitron_700Bold } from '@expo-google-fonts/orbitron';

function FakeStatusBar() {
  return (
    <View style={styles.fakeStatusBar}>
      <Text style={styles.fakeStatusText}>10:30</Text>
      <Text style={styles.fakeStatusText}>▲▲▲ ⦾ 🔋</Text>
    </View>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({ Orbitron_700Bold });
  if (!fontsLoaded) return <View style={{ flex: 1, backgroundColor: '#390651ff' }} />;

  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>

        <FakeStatusBar />

        <Text style={styles.titulo}>
          <Text style={{ color: '#ffffff', fontSize: 26 }}>SIMULADOR DE{'\n'}</Text>
          <Text style={{ color: '#cc44ff', fontSize: 36 }}>ENGAJAMENTO</Text>
        </Text>

        <View style={styles.visor}>
          <Visor curtidas={128} seguidores={34} />
        </View>

        <View style={styles.botoes}>
          <Botao label='AC' triplo />


          <Botao label='👍                       1+ Curtidas' duplo />

          <Botao label='💬                        2+ Curtidas' duplo />
          <Botao label='✈️                        5+ Curtidas' duplo />


          <Botao label='🚀                        2x Curtidas' duplo />
          <Botao label='👤                        1+ seguidor' duplo />
          <Botao label='🔥 10+Curtidas 3+seguidores' duplo />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

//Não mude essa parte Claude //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#390651ff'
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  visor: {

    justifyContent: 'flex-start'
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Orbitron_700Bold',
    paddingTop: 30,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  fakeStatusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#390651ff',
  },
  fakeStatusText: {
    color: 'white',
    fontSize: 21,
    fontWeight: '600',
  },

    label: {
    color: '#fff'
  }
  
})