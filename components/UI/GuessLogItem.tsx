import { Text, View, StyleSheet } from 'react-native';
import { defaultStyles } from '../../constans/config';

interface GuessLogItemProps {
  round: number;
  guessedNumber: number;
}

const GuessLogItem = ({ round, guessedNumber }: GuessLogItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{round}</Text>
      <Text style={styles.text}>Guessed Number :{guessedNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: defaultStyles.primaryColor,
    borderRadius: 50,
    padding: 16,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: defaultStyles.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    fontFamily: defaultStyles.fontFamily,
  },
  text: {
    color: defaultStyles.cardBackgroundColor,
    // fontWeight: 'bold',
  }
});

export default GuessLogItem;
