import { useCallback, useEffect } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { defaultStyles } from './constans/config';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOverScreen';
// import { useFonts } from 'expo-font';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

let defaultMax = 1000;
export interface PickedNumberHandler {
  (pickedNumber: number): void;
}

const App = () => {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  const [gameRounds, setGameRounds] = useState<number[]>([]);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }


  const pickedNumberHandler: PickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const gameRoundsHandler = (round: number) => {
    setGameRounds((prev) => [...prev, round]);
  };

  const Screen = userNumber
    ? gameIsOver
      ? GameOver
      : GameScreen
    : StartGameScreen;

  const resetGameHandler = () => {
    setUserNumber(0);
    setGameRounds([]);
  };



  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[
        defaultStyles.backgroundColor,
        defaultStyles.backgroundLinearColor,
      ]}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/Dice.png')}
        resizeMode="cover"
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>
          <Screen
            pickedNumberHandler={pickedNumberHandler}
            userNumber={userNumber}
            gameOverHandler={gameOverHandler}
            defaultMax={defaultMax}
            restartGameHandler={resetGameHandler}
            gameRounds={gameRounds}
            gameRoundsHandler={gameRoundsHandler}
          />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    minHeight: 900,
  },
  imageBackground: {
    opacity: 0.6,
  },
});

export default App;
