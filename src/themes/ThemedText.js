import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";

const ThemedText = ({ style, ...props }) => {
  const { colors } = useTheme();
  return (
    <Text
      style={[{ color: colors.text }, style]}
      {...props}
    />
  );
};

export default ThemedText;
