import { TouchableHighlight, Text, StyleSheet, Dimensions, View } from 'react-native'

export default function Botao(props) {
    const estiloBotao = [styles.botao]
    if (props.triplo) estiloBotao.push(styles.botaoTriplo)
    if (props.duplo) estiloBotao.push(styles.botaoDuplo)
    if (props.operacao) estiloBotao.push(styles.botaoOperacao)
    if (props.cor) estiloBotao.push({ backgroundColor: props.cor })

    const tamanho = Dimensions.get('window').width / 3 - 16

    return (
        <TouchableHighlight style={estiloBotao} underlayColor='#ffffff33' onPress={props.onPress}>
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Text style={{ fontSize: tamanho * 0.0, color: 'white',  justifyContent: 'center', alignItems: 'center'}}>{props.icone}</Text>
                <Text style={{ fontSize: tamanho * 0.16, fontWeight: '900', color: 'white', textAlign: 'center', justifyContent: 'center' }}>{props.label}</Text>
                <Text style={{ fontSize: tamanho * 0.16, color: 'rgba(255,255,255,0.85)', textAlign: 'center', justifyContent: 'center' }}>{props.sub}</Text>
            </View>
        </TouchableHighlight>
    )
}  

const styles = StyleSheet.create({
    botao: {
        fontSize: 40,
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
        alignItems: 'center',
        color: 'white',
        left: 0,
        borderRadius: 30,
    },
    botaoDuplo: {
        borderRadius: 20,
        width: Dimensions.get('window').width / 2 - 20,
        height: Dimensions.get('window').width / 3 - 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#432847ff',
        margin: 5,
        top: 10,
        fontSize: 44,
        color: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    botaoOperacao: {
        backgroundColor: '#6996e8',
        color: 'white'
    }
})