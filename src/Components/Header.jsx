import { Appbar } from "react-native-paper";
import globalStyles from "../styles/GlobalStyles";

function HeaderDemo() {
  return (
    <>
      <Appbar.Header
        style={[
          globalStyles.appbar,
          // { backgroundColor: colors.primary }
        ]}
      >
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content
          title="Appbar"
          // titleStyle={{ color: colors.text }}
        />
        <Appbar.Action
          icon="calendar"
          onPress={() => {}}
        />
        <Appbar.Action
          icon="magnify"
          onPress={() => {}}
        />
      </Appbar.Header>
    </>
  );
}

export default HeaderDemo;
