import { Text, StyleSheet, View } from 'react-native'

export default props => {
    return (
        <View style={styles.visor}>
            <Text style={styles.valorVisor} numberOfLines={1}>{props.valor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    visor: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#0d2042ff',
        alignItems: 'flex-end'
    },
    valorVisor: {
        fontSize: 60,
        color: '#fff'
    }
})