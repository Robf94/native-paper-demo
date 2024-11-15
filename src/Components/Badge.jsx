import { Badge, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import ThemedText from "../themes/ThemedText";

function BadgeDemo() {
  return (
    <>
      <ThemedText variant="titleLarge">Badge Demo</ThemedText>
      <View style={centred.test}>
        <Text>This is a badge:</Text>
        <Badge style={{ alignSelf: "center" }}></Badge>
      </View>
    </>
  );
}

const centred = StyleSheet.create({
  test: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default BadgeDemo;
