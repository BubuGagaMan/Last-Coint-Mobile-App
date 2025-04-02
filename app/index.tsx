import { Text, View, StyleSheet, ImageBackground, SafeAreaView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const blue = 'blue'

import StartGameScreen from "@/screens/startGameScreen/StartGameScreen";
import GameScreen from "@/screens/gameScreen/GameScreen";
import GameOverScreen from "@/screens/gameOverScreen/GameOverScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from "react";

export default function Index() {

  const [loaded, error] = useFonts({
    'bad-pattern-name-1': require('@/assets/fonts/Play-Regular.ttf'),
    'bad-pattern-name-2': require('@/assets/fonts/SyneMono-Regular.ttf'),

  })


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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <LinearGradient colors={['#000000', '#8A2BE2']} style={styles.rootScreen}>
              <ImageBackground imageStyle={styles.backgroundImage} resizeMode="cover" source={require('../assets/images/coins.png')} />
      <SafeAreaView style={styles.rootScreen}>

        {pickedNumber && pickedNumber > 1 ? <GameScreen onGameEnd={onGameEnd} coinsNumber={pickedNumber} onChangePickedNumber={onPickedNumber}/> 
        : playerWon !== undefined ? <GameOverScreen onReset={resetGame} playerWon={playerWon}/>
        : <StartGameScreen onPickedNumber={onPickedNumber} />}
      </SafeAreaView>
    </LinearGradient>
  );
}

const { height } = Dimensions.get('window')


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: height,
    borderWidth: 1,
    padding: 0
  },

})