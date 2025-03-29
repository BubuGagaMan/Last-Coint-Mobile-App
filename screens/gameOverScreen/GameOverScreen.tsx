import { Text, View, Pressable, StyleSheet, Alert } from "react-native"

import PrimaryButton from "@/components/PrimaryButton"

import { inputBackgroundColor } from "@/stylesColors"

import { useState } from "react"

interface Props {
    playerWon: Boolean
    onReset: () => void
}

export default function GameOverScreen({ playerWon, onReset }: Props) {


    return (
        <View style={{flex: 1, justifyContent: 'center', gap: 20}}>
            <Text style={{textAlign: 'center'}}>GAME OVER</Text>
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
        borderColor: 'red',

        padding: 10,
        width: '75%',
        margin: 'auto',
        backgroundColor: 'green'
    }
})