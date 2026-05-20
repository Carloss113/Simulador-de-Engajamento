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
        width: Dimensions.get('window').width / 4 * 3.699,
        justifyContent: 'center',
        backgroundColor: 'crimson',
        alignItems: 'flex-start',
        color: 'white',
        left: 0,
        borderRadius: 30,
        top: -50
    },
    botaoDuplo: {
        width: Dimensions.get('window').width / 4 * 1.999,
        borderRadius: 40,
        width: '187px',
        height: '125px',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#432847ff',
        left: 0,
        top: -20,
        color: '#929292ff',
        margin: 5

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

