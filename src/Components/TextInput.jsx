import * as React from "react";
import { TextInput } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

const TextInputDemo = () => {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <ThemedText variant="titleLarge">Text Input Demo</ThemedText>

      <TextInput
        label="Email"
        value={text}
        mode="outlined"
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </>
  );
};

export default TextInputDemo;
