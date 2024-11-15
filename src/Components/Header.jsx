import { Appbar, IconButton, Tooltip } from "react-native-paper";
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
          title="Bin App Design Guide"
          // titleStyle={{ color: colors.text }}
        />
        <Tooltip title="Streak">
          <Appbar.Action
            icon="trending-up"
            onPress={() => {}}
          />
        </Tooltip>
        <Tooltip title="XP">
          <Appbar.Action
            icon="one-up"
            onPress={() => {}}
          />
        </Tooltip>
      </Appbar.Header>
    </>
  );
}

export default HeaderDemo;
