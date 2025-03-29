import { View, Text, StyleSheet } from "react-native"

interface Props {
    playerName: string
    playerTurn: boolean
}
export default function PlayerSection ({ playerName, playerTurn }: Props) {
    return (
        <View style={!playerTurn ? styles.playerOnTurn : styles.playerOffTurn}>
            <Text style={styles.playerTitle}>{playerName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    playerOnTurn: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'BlueViolet',
        borderRadius: 20,
        padding: 10,
        marginVertical: 5,
        width: '50%',
        marginHorizontal: 'auto',
        backgroundColor: '#8A2BE2'
    },
    playerOffTurn: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 20,
        padding: 10,
        marginVertical: 5,
        width: '50%',
        marginHorizontal: 'auto'
    },
    playerTitle: {
        color: 'white',
        fontSize: 16,

    }
})