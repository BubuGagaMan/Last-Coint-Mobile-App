import { TextInput, View, Pressable, StyleSheet, Alert, Text } from "react-native"

import PrimaryButton from "@/components/PrimaryButton"

import { inputBackgroundColor } from "@/stylesColors"

import { useState } from "react"

interface Props {
    onPickedNumber: (pickedNum: number) => void
}

export default function StartGameScreen({ onPickedNumber }: Props) {

    const [coinsNumber, setCoinsNumber] = useState<string>('')

    const handleCoinsInput = (text: string) => {
        setCoinsNumber(text)
    }

    const handleConfirmPress = () => {

        const castedNumber = parseInt(coinsNumber)
        setCoinsNumber('')
        if(isNaN(castedNumber) || castedNumber < 1) {
            Alert.alert(
                'Invalid Number', 
                'Please enter a valid positive integer', 
                [{text: 'Okay', style: 'destructive', onPress: handleResetPress}]
            )
            
            return
        }

        onPickedNumber(castedNumber)
    }

    const handleResetPress = () => {
        setCoinsNumber('')
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={{textAlign: 'center'}}>Set Starting Coins</Text>
            <TextInput 
                style={styles.textInput} 
                maxLength={2} 
                keyboardType="number-pad"
                value={coinsNumber}
                onChangeText={handleCoinsInput}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonWrapper} >
                    <PrimaryButton onPress={handleResetPress}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonWrapper} >
                    <PrimaryButton onPress={handleConfirmPress}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        gap: 5,
        //flex: 1,
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: inputBackgroundColor,
        borderRadius: 15,

        elevation: 30, // android only

        shadowColor: 'red',

        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 5,
        shadowOpacity: 1 // ios
    },
    textInput: {

        // height: 50,
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: 'purple',
        borderRadius: 0,
        color: 'purple',
        padding: 0,
        textAlign: 'center',
        width: 100,
        margin: 'auto'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    // use flex 1 with a wrapper instead of on the button styles to keep styling flexibility
    buttonWrapper: {
        flex: 1
    }
})