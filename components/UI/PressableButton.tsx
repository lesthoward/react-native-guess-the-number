import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { defaultStyles } from '../../constans/config';

interface PressableButtonProps extends PressableProps {
  children: React.ReactNode;
  extendButtonInner?: StyleProp<ViewStyle>;
  extendTextStyle?: StyleProp<TextStyle>;
}

const PressableButton = ({
  children,
  extendButtonInner,
  extendTextStyle,
  ...rest
}: PressableButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                extendButtonInner,
                styles.buttonInnerContainer,
                styles.iosPressedStyle,
              ]
            : [styles.buttonInnerContainer, extendButtonInner]
        }
        // android_ripple={{ color: defaultStyles.buttonEffectColor }}
        {...rest}
      >
        <Text style={[styles.buttonText, extendTextStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: defaultStyles.buttonColor,
    paddingVertical: 14,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: defaultStyles.buttonTextColor,
    textAlign: 'center',
    fontFamily: defaultStyles.fontFamily,
  },
  iosPressedStyle: {
    backgroundColor: defaultStyles.buttonEffectColor,
  },
});

export default PressableButton;
