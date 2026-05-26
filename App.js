import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import Botao from './src/components/Botao'
import Visor from './src/components/Visor'
import { useFonts, Orbitron_700Bold } from '@expo-google-fonts/orbitron'

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
  



  const [curtidas, setCurtidas] = useState(0)
  const [seguidores, setSeguidores] = useState(0)

  if (!fontsLoaded) return <View style={{ flex: 1, backgroundColor: '#390651ff' }} />;

  function curtir()       { setCurtidas(c => c + 1) }
  function comentar()     { setCurtidas(c => c + 2) }
  function compartilhar() { setCurtidas(c => c + 5) }
  function viralizar()    { setCurtidas(c => c * 2) }
  function seguir()       { setSeguidores(s => s + 1) }
  function engajar()      { setCurtidas(c => c + 10); setSeguidores(s => s + 3) }
  function zeraTudo()     { setCurtidas(0); setSeguidores(0) }


  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>

        <FakeStatusBar />

        <Text style={styles.titulo}>
          <Text style={{ color: '#ffffff', fontSize: 26 }}>SIMULADOR DE{'\n'}</Text>
          <Text style={{ color: '#cc44ff', fontSize: 36 }}>ENGAJAMENTO</Text>
        </Text>

        <View style={styles.visor}>
  <Visor curtidas={curtidas} seguidores={seguidores} />
</View>

       <View style={styles.botoes}>
  <Botao icone='' label='AC'           sub='ZERAR TUDO'   triplo       onPress={zeraTudo} />
  <Botao icone='' label='CURTIR'       sub='+1 curtida'   cor='#22a050' duplo onPress={curtir} />
  <Botao icone='' label='COMENTAR'     sub='+2 curtidas'  cor='#17a88a' duplo onPress={comentar} />
  <Botao icone='' label='COMPARTILHAR' sub='+5 curtidas'  cor='#5c4fcf' duplo onPress={compartilhar} />
  <Botao icone='' label='VIRALIZAR'    sub='    x2 curtidas'  cor='#e87a1a' duplo onPress={viralizar} />
  <Botao icone='' label='SEGUIR'       sub='    +1 seguidor'  cor='#4a5068' duplo onPress={seguir} />
  <Botao icone='' label='ENGAJAR'      sub='+10 curtidas + 3 seguidores' cor='#d94020' duplo onPress={engajar} />
</View> 

      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#390651ff'
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: 36,
  },
  visor: {

    justifyContent: 'flex-start',
    maxWidth: 400,
    width: '100%',
    left: 15,
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
    color: '#5f4f4f'
  }
  
})