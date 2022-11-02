import { StyleSheet, Text, View } from 'react-native';
import { defaultStyles } from '../../constans/config';

interface NumberContainerProps {
  children: React.ReactNode;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    backgroundColor: defaultStyles.guessedNumberBackground,
    borderColor: defaultStyles.guessedNumberBorder,
    padding: 22,
    margin: 24,
    borderRadius: 8,
  },
  numberText: {
    color: defaultStyles.guessedNumberColor,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NumberContainer;
