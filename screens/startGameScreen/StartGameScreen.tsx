import { TextInput, View, Pressable, StyleSheet, Alert, Text } from "react-native"

import PrimaryButton from "@/components/PrimaryButton"

import { useState } from "react"

import { Colors } from "@/stylesColors"

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
            <Text style={styles.titleStyle}>Last Coin</Text>
            <View>
                <Text style={styles.startingText}>This is a turn based game, in which, each player can take 1-3 coins each turn.</Text>
                <Text style={styles.startingText}>The game starts with a set number of coins and ends when all coins run out.</Text>
                <Text style={styles.startingText}>The player who takes the last coin loses.</Text>
                <Text style={[styles.startingText, {fontSize: 22, marginTop: 20}]} >Set Starting Coins</Text>
            </View>
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
    titleStyle: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'bad-pattern-name-1'
    },
    inputContainer: {
        // responsiveness
        minWidth: '50%',
        width: 350,
        maxWidth: '80%',
        

        gap: 5,
        //flex: 1,
        padding: 16,
        marginTop: 100,
        marginHorizontal: 'auto',
        backgroundColor: Colors.white,
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
    },
    startingText: {
        textAlign:'center',
        margin: 5,
        fontSize: 16,
        fontFamily: 'bad-pattern-name-2',
    }
})