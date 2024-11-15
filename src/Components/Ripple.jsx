import * as React from "react";
import { View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

const RippleDemo = () => (
  <View>
    <ThemedText variant="titleLarge">Ripple Demo</ThemedText>
    <TouchableRipple
      onPress={() => console.log("Pressed")}
      rippleColor="rgba(0, 0, 0, .32)"
      style={{ height: "300" }}
    >
      <Text>Press anywhere</Text>
    </TouchableRipple>
  </View>
);

export default RippleDemo;
