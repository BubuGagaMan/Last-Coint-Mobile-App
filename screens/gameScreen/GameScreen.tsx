import { Text, View, StyleSheet, Alert,  } from 'react-native'
import { useState, useEffect } from 'react'

import { baseViewContainerColor } from '@/stylesColors'

import PrimaryButton from '@/components/PrimaryButton'
import NumberButton from '@/components/NumberButton'
import PlayerSection from '@/components/PlayerSection'
import CurrentCoinsDisplay from '@/components/CurrentCoinsDisplay'

interface Props {
    coinsNumber: number
    onChangePickedNumber: (num: number) => void
    onGameEnd: (endOutcome: boolean) => void
}

export default function GameScreen ({ coinsNumber, onChangePickedNumber, onGameEnd }: Props) {

    const [currentCoins, setCurrentCoins] = useState<number>(coinsNumber)
    const [playerTurn, setPlayerTurn] = useState<boolean>(true)

    const handleNumberButton = (num: number) => {
        setCurrentCoins(prevState => prevState - num)
        onChangePickedNumber(currentCoins)

        if(currentCoins > 0 && currentCoins !== 1){
            setPlayerTurn(prevState => !prevState)
        }else{
            alert('YOU LOST')
            onGameEnd(false)
        }
    }

    useEffect(() => {
        if(!playerTurn) {
            setTimeout(() => {
                const remainder = currentCoins % 4

            const AIMove = (coinsToTake: number) => {
                setCurrentCoins(prevState => prevState - coinsToTake)
                Alert.alert('Enemy move', `Enemy has taken ${coinsToTake}`, [{text: 'LOL'}])
            }

            if(remainder === 1) {
                //console.log(remainder, 'r === 1')
                AIMove(1)
            }else if(remainder === 0) {
                //console.log(remainder, 'r === 0')
                AIMove(3)
            }else{
                //console.log(remainder, 'else condition')
                AIMove(remainder - 1)
            }

            if(currentCoins > 0 && currentCoins !== 1){
                console.log(currentCoins)
                setPlayerTurn(prevState => !prevState)
            }else{
                Alert.alert('YOU WON', 'NICE', [{text: 'LOL'}])
                onGameEnd(false)
            }
            onChangePickedNumber(currentCoins)
            }, 1000)
        }
    }, [playerTurn])

    return (
        <View style={styles.baseViewContainer}>
            <PlayerSection playerName='AI' playerTurn={playerTurn}/>
            <Text style={{ color: 'white', textAlign: 'center'}}>{!playerTurn && 'AI TURN'}</Text> 
            <CurrentCoinsDisplay currentCoins={currentCoins}/>
            <Text style={{ color: 'white', textAlign: 'center'}}>{playerTurn && 'YOUR TURN'}</Text> 
            <View >
                <View style={styles.numberButtonsContainer}>
                    <NumberButton btnNumber={1} onPress={handleNumberButton} />
                    {currentCoins - 2 > 0 && <NumberButton btnNumber={2} onPress={handleNumberButton} />}
                    {currentCoins - 3 > 0 && <NumberButton btnNumber={3} onPress={handleNumberButton} />}
                </View>
                <PlayerSection playerName='Player' playerTurn={!playerTurn}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    baseViewContainer: {
        // backgroundColor: baseViewContainerColor,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    numberButtonsContainer: {
        flexDirection: 'row',
        //justifyContent: 'center',
        marginBottom: 40
    },
})