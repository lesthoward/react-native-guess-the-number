import { Image, StyleSheet, Text, View } from 'react-native';
import PressableButton from '../components/UI/PressableButton';
import Title from '../components/UI/Title';
import { defaultStyles } from '../constans/config';

interface GameOverScreenProps {
  gameRounds: number[];
  userNumber: number;
  restartGameHandler: () => void;
}

const GameOver = ({
  restartGameHandler,
  gameRounds,
  userNumber,
}: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title
        extendStyle={{
          borderColor: defaultStyles.primaryColor,
          color: defaultStyles.contrastColor,
          backgroundColor: defaultStyles.primaryColor,
          paddingHorizontal: 16,
          paddingVertical: 12,
          textTransform: 'uppercase',
          borderRadius: 8,
        }}
      >
        Game is over!
      </Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/mountain.jpg')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{gameRounds.length}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PressableButton
        extendButtonInner={{
          backgroundColor: defaultStyles.buttonBackgroundColor,
        }}
        extendTextStyle={{ color: defaultStyles.accentTextColor }}
        onPress={restartGameHandler}
      >
        Start New Game
      </PressableButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 6,
    borderColor: defaultStyles.borderColor,
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 18,
    fontFamily: defaultStyles.fontFamily,
  },
  highlight: {
    color: defaultStyles.highlightedColor,
    fontWeight: 'bold',
    fontFamily: defaultStyles.fontFamily,
  },
});

export default GameOver;
