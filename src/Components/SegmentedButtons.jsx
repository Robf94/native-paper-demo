import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

const SegButtonDemo = () => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <ThemedText variant="titleLarge">Segmented Button Demo</ThemedText>
      <SafeAreaView style={styles.container}>
        <ThemedText>Top Recyclers</ThemedText>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: "day",
              label: "Day",
            },
            {
              value: "week",
              label: "Week",
            },
            {
              value: "month",
              label: "Month",
            },
          ]}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default SegButtonDemo;
