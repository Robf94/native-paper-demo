import * as React from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import ThemedText from "../themes/ThemedText";

function SurfaceDemo() {
  return (
    <>
      <ThemedText variant="titleLarge">Surface Demo</ThemedText>
      <View style={{ flexDirection: "row" }}>
        <Surface
          style={styles.surface}
          elevation={0}
        >
          <Text>Surface L0</Text>
        </Surface>
        <Surface
          style={styles.surface}
          elevation={1}
        >
          <Text>Surface L1</Text>
        </Surface>
        <Surface
          style={styles.surface}
          elevation={2}
        >
          <Text>Surface L2</Text>
        </Surface>
        <Surface
          style={styles.surface}
          elevation={3}
        >
          <Text>Surface L3</Text>
        </Surface>
        <Surface
          style={styles.surface}
          elevation={4}
        >
          <Text>Surface L4</Text>
        </Surface>
        <Surface
          style={styles.surface}
          elevation={5}
        >
          <Text>Surface L5</Text>
        </Surface>
      </View>
    </>
  );
}

export default SurfaceDemo;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
