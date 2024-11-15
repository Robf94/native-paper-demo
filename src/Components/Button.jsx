import * as React from "react";
import { Button, RadioButton, Checkbox } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

function ButtonDemo() {
  const [checked, setChecked] = React.useState("first");
  const [ticked, setTicked] = React.useState(false);
  return (
    <>
      <ThemedText variant="titleLarge">Button, Radio, Checkbox Demo</ThemedText>

      <Button
        icon="french-fries"
        mode="elevated"
        onPress={() => console.log("Pressed")}
      >
        Press me!!
      </Button>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
      />

      <Checkbox
        status={ticked ? "checked" : "unchecked"}
        onPress={() => {
          setTicked(!ticked);
        }}
      />
    </>
  );
}

export default ButtonDemo;
