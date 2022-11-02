import { CSSProperties } from "react"
import { StyleSheet, View } from 'react-native';
import { defaultStyles } from '../../constans/config';

interface CardProps {
  children: React.ReactNode;
  backgroundColor?: CSSProperties["backgroundColor"];
}

const Card = ({ children, backgroundColor }: CardProps) => {
  return <View style={[styles.container, {backgroundColor}]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 16,
    elevation: 4,
    shadowColor: defaultStyles.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    width: '100%',
  },
});

Card.defaultProps = {
  backgroundColor: defaultStyles.primaryColor,
};

export default Card;
