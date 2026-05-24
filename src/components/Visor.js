import { Text, StyleSheet, View } from 'react-native'

export default props => {
    return (
        <View style={styles.visorexterno}>
            <View style={styles.card}>
                <Text style={styles.icone}>❤️</Text>
                <Text style={styles.label}>CURTIDAS</Text>
                <Text style={[styles.valor, { color: '#ff3b6e' }]}>{props.curtidas}</Text>
            </View>

            <View style={styles.divisoria} />

            <View style={styles.card}>
                <Text style={styles.icone}>👥</Text>
                <Text style={styles.label}>SEGUIDORES</Text>
                <Text style={[styles.valor, { color: '#3bbfff' }]}>{props.seguidores}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   visorexterno: {
    flexDirection: 'row',
    backgroundColor: '#0d2042ff',
    borderRadius: 30,
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 40,      
    paddingHorizontal: 10,
    alignItems: 'center',
    top: -10
},
    valor: {
    fontSize: 52,              
    fontWeight: '900',

    },
    card: {
        flex: 1,
        alignItems: 'center',
        gap: 6,
    },
    divisoria: {
    width: 2,
    height: 80,
    backgroundColor: '#ffffff44',  
},
    icone: {
        fontSize: 28,
    },
    label: {
        color: '#9999cc',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1,
    },
})