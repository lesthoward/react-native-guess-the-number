import { StyleSheet, Text } from 'react-native';
import { defaultStyles } from '../../constans/config';

interface InstructionTextProps {
  children: React.ReactNode;
  color?: string;
  letterSpacing?: number;
}

const InstructionText = ({children, color, letterSpacing}: InstructionTextProps) => {
  return <Text style={[styles.instructionText, {color, letterSpacing}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: defaultStyles.fontFamily
  },
});

InstructionText.defaultProps = {
  color: defaultStyles.labelColor,
}

export default InstructionText;
