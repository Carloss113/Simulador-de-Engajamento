import {TouchableHighlight, Text, StyleSheet, Dimensions} from
'react-native'

const styles = StyleSheet.create({
    botao: {
        fontSize:40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        boderColor: '#888' 
    },
    botaoTriplo: {
        width: Dimensions.get('window').width / 4 * 3.999,
        justifyContent: 'center',
        backgroundColor: 'crimson',
        alignItems: 'flex-start'
    },
    botaoDuplo: {
        width: Dimensions.get('window').width / 4 * 1.999,
        borderRadius: 40,
        width: '195px',
        height: '135px',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#241826'
    },
    botaoOperacao: {
        backgroundColor: '#6996e8',
        color: 'white'
    }
})

export default function Botao(props){

    const estiloBotao = [styles.botao]
    if (props.triplo) estiloBotao.push(styles.botaoTriplo)
    if (props.duplo) estiloBotao.push(styles.botaoDuplo)
    if (props.operacao) estiloBotao.push(styles.botaoOperacao)
    return(
        <TouchableHighlight>
            <Text style={estiloBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}

