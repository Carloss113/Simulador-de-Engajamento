import {StyleSheet, View, Text} from 'react-native'
import Botao from './src/components/Botao'
import Visor from './src/components/Visor'

export default function App(){
  return(
    <View style={styles.container}>
        <View style={styles.visor}>
       <Visor valor={10}></Visor>
        </View>

      <View style={styles.botoes}>
        <Botao label='AC' triplo/>
        

        <Botao label='7' duplo/>
        <Botao label='8' duplo/>
        <Botao label='9' duplo/>

        <Botao label='4' duplo/>
        <Botao label='5' duplo/>
        <Botao label='6' duplo/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#390651ff'
  },
  botoes:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
     
  },
  visor: {
    flex: 1,
    justifyContent: 'flex-start'
  }
})
