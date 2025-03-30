import { Text, View, Pressable, StyleSheet, Alert } from "react-native"

import { Colors } from "@/stylesColors"

interface Props {
    playerWon: Boolean
    onReset: () => void
}

export default function GameOverScreen({ playerWon, onReset }: Props) {


    return (
        <View style={{flex: 1, justifyContent: 'center', gap: 20}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 32}}>GAME OVER</Text>
            <Pressable onPress={onReset} >
                <View style={styles.resetBtn}>
                    <Text style={{textAlign: 'center'}}>RESET</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    resetBtn: {
        borderWidth: 2,
        borderColor: Colors.redPrimary,
        borderRadius: 15,

        padding: 10,
        width: '75%',
        margin: 'auto',
        backgroundColor: Colors.burgundyMedium
    }
})