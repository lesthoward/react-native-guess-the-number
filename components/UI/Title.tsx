import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { defaultStyles } from '../../constans/config';

interface TitleProps {
  children: React.ReactNode;
  extendStyle?: StyleProp<TextStyle>;
}

const Title = ({ children, extendStyle }: TitleProps) => {
  return <Text style={[styles.title, extendStyle ]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: defaultStyles.primaryColor,
    textAlign: 'center',
    backgroundColor: defaultStyles.cardBackgroundColor,
    borderRadius: 8,
    borderBottomColor: defaultStyles.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 12,
    textTransform: 'uppercase',
    fontFamily: defaultStyles.fontFamily,
  },
});

export default Title;
