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
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#0d2042ff',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        maxHeight: '200px',
        height: '100%',
        left: 15,
        top: 150,
        borderRadius: 30
        

    },
    valorVisor: {
        fontSize: 60,
        color: '#fff'
    },

    
})