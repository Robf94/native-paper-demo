import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

const HomeRoute = () => <Text>Home</Text>;

const LeaderboardRoute = () => <Text>Leaderboard</Text>;

const ScanRoute = () => <Text>Scan</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

function BottomNavDemo() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", focusedIcon: "home", unfocusedIcon: "home-outline" },
    { key: "leaderboard", title: "Leaderboard", focusedIcon: "trophy", unfocusedIcon: "trophy-outline" },
    { key: "scan", title: "Scan", focusedIcon: "barcode-scan" },
    { key: "profile", title: "Profile", focusedIcon: "account-cowboy-hat", unfocusedIcon: "account-cowboy-hat-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    leaderboard: LeaderboardRoute,
    scan: ScanRoute,
    profile: ProfileRoute,
  });

  return (
    <>
      <ThemedText variant="titleLarge">Botom Bar Demo</ThemedText>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
}

export default BottomNavDemo;
