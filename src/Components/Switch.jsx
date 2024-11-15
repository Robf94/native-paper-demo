import * as React from "react";
import { Switch } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

function SwitchDemo() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <>
      <ThemedText variant="titleLarge">Switch Demo</ThemedText>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
    </>
  );
}

export default SwitchDemo;
