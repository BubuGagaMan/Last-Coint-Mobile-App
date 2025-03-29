import { Text, View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const blue = 'blue'

import StartGameScreen from "@/screens/startGameScreen/StartGameScreen";
import GameScreen from "@/screens/gameScreen/GameScreen";
import GameOverScreen from "@/screens/gameOverScreen/GameOverScreen";

export default function Index() {

  const [pickedNumber, setPickedNumber] = useState<number | undefined>(undefined)

  const [playerWon, setPlayerWon] = useState<boolean | undefined>(undefined)

  const resetGame = () => {
    setPickedNumber(undefined)
    setPlayerWon(undefined)
  }

  const onPickedNumber = (pickedNum: number | undefined) => {
    setPickedNumber(pickedNum)
    console.log(pickedNum)
  }

  const onGameEnd = (endOutcome: boolean) => {
    setPlayerWon(endOutcome)
  }

  return (
    <LinearGradient colors={['pink', 'blue']} style={styles.rootScreen}>
      <SafeAreaView style={styles.rootScreen}>
        <ImageBackground imageStyle={styles.backgroundImage} resizeMode="repeat" source={require('../assets/images/coins.png')} />

        {pickedNumber && pickedNumber > 1 ? <GameScreen onGameEnd={onGameEnd} coinsNumber={pickedNumber} onChangePickedNumber={onPickedNumber}/> 
        : playerWon !== undefined ? <GameOverScreen onReset={resetGame} playerWon={playerWon}/>
        : <StartGameScreen onPickedNumber={onPickedNumber} />}
      </SafeAreaView>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 1
  }
})