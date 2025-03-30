import { View, Text, StyleSheet } from "react-native"

import { Colors } from "@/stylesColors"

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
        borderColor: Colors.redPrimary,
        borderRadius: 20,
        padding: 10,
        marginVertical: 5,
        width: '50%',
        marginHorizontal: 'auto',
        backgroundColor: Colors.yellowPrimary
    },
    playerOffTurn: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.black,
        borderRadius: 20,
        padding: 10,
        marginVertical: 5,
        width: '50%',
        marginHorizontal: 'auto',
        backgroundColor: Colors.yellowSecondary
    },
    playerTitle: {
        color: Colors.black,
        fontSize: 16,

    }
})