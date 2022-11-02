import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Title from '../components/UI/Title';
import { defaultStyles } from '../constans/config';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/Game/NumberContainer';
import PressableButton from '../components/UI/PressableButton';
import Card from '../components/UI/Card';
import InstructionText from '../components/UI/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/UI/GuessLogItem';

interface GameScreenProps {
  userNumber: number;
  gameOverHandler: () => void;
  defaultMax: number;
  gameRoundsHandler: (rounds: number) => void;
  gameRounds: number[];
}

const generateRandomBetween = (
  min: number,
  max: number,
  excludedNumber?: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (excludedNumber && randomNumber === excludedNumber) {
    return generateRandomBetween(min, max, excludedNumber);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({
  userNumber,
  gameOverHandler,
  defaultMax,
  gameRoundsHandler,
  gameRounds,
}: GameScreenProps) => {
  let defaultMin = 1;
  const [minBoundary, setMinBoundary] = useState<number>(defaultMin);
  const [maxBoundary, setMaxBoundary] = useState<number>(defaultMax);

  const [currentGuess, setCurrentGuess] = useState<number>(0);

  const nextGuessHandler = (condition: 'higher' | 'lower') => {
    if (
      (condition === 'higher' && currentGuess > userNumber) ||
      (condition === 'lower' && currentGuess < userNumber)
    ) {
      return Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    }

    if (condition === 'lower') setMaxBoundary(currentGuess);
    else setMinBoundary(currentGuess + 1);
  };

  useEffect(() => {
    const initialGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      userNumber
    );
    setCurrentGuess(initialGuess);
  }, []);

  useEffect(() => {
    if (userNumber === currentGuess) {
      gameOverHandler();
    }
    gameRoundsHandler(currentGuess);
  }, [currentGuess, userNumber]);

  useEffect(() => {
    if (minBoundary !== defaultMin || maxBoundary !== defaultMax) {
      setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary));
    }
  }, [minBoundary, maxBoundary]);

  return (
    <View style={styles.container}>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card backgroundColor={defaultStyles.cardBackgroundColor}>
        <InstructionText color={defaultStyles.accentTextColor}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PressableButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} />
            </PressableButton>
          </View>
          <View style={styles.button}>
            <PressableButton onPress={nextGuessHandler.bind(this, 'higher')}>
              <Ionicons name="md-add" size={24} />
            </PressableButton>
          </View>
        </View>
      </Card>
      <View style={styles.scrollList}>
        <FlatList
          data={gameRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              key={index}
              round={gameRounds.length - index}
              guessedNumber={item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: defaultStyles.primaryColor,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: defaultStyles.primaryColor,
    paddingVertical: 8,
  },
  buttonsContainer: {
    marginTop: 12,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  scrollList: {
    marginTop: 24,
    maxHeight: 400,
  },
});

export default GameScreen;
