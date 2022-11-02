import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import { PickedNumberHandler } from '../App';
import InstructionText from '../components/UI/InstructionText';
import PressableButton from '../components/UI/PressableButton';
import Title from '../components/UI/Title';
import { defaultStyles } from '../constans/config';

interface StartGameScreenProps {
  pickedNumberHandler: PickedNumberHandler;
  defaultMax: number;
}
const StartGameScreen = ({
  pickedNumberHandler,
  defaultMax,
}: StartGameScreenProps) => {
  const [enteredValue, setEnteredValue] = useState<string>('');

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.trim());
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'default', onPress: resetInputHandler }]
      );
    pickedNumberHandler(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title extendStyle={styles.headingText}>Guess the number game</Title>
      <View style={styles.container}>
        <InstructionText>
          The device will guess your number. Please enter a number between 1 and {defaultMax}
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={3}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PressableButton onPress={resetInputHandler}>Reset</PressableButton>
          </View>
          <View style={styles.button}>
            <PressableButton onPress={confirmInputHandler}>
              Confirm
            </PressableButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    flexDirection: 'column',
    marginHorizontal: 24,
  },
  headingText: {
    fontFamily: defaultStyles.fontFamily
  },
  container: {
    backgroundColor: defaultStyles.primaryColor,
    borderRadius: 10,
    marginTop: 32,
    padding: 16,
    elevation: 4,
    shadowColor: defaultStyles.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    width: '100%',
  },
  numberInput: {
    alignSelf: 'center',
    height: 50,
    width: 55,
    fontSize: 32,
    borderBottomColor: defaultStyles.borderColor,
    borderBottomWidth: 2,
    color: defaultStyles.inputTextColor,
    marginVertical: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: defaultStyles.fontFamily,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
