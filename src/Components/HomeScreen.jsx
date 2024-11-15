// import * as React from "react";
import { ScrollView, View } from "react-native";
import TextDemo from "./TextDemo";
import HeaderDemo from "./Header";
import CardDemo from "./Card";
import ButtonDemo from "./Button";
import BadgeDemo from "./Badge";
import BottomNavDemo from "./BottomNav";
import SearchBarDemo from "./SearchBar";
import SegButtonDemo from "./SegmentedButtons";
import TextInputDemo from "./TextInput";
import SwitchDemo from "./Switch";
import SurfaceDemo from "./Surface";
import RippleDemo from "./Ripple";

function HomeScreen() {
  // const { colors, elevation } = useTheme();

  return (
    <>
      <HeaderDemo />

      <ScrollView>
        <View style={{gap: "20px"}}>
          <SearchBarDemo />
          <TextDemo />
          <ButtonDemo />
          <SwitchDemo />
          <CardDemo />
          <BadgeDemo />
          <SegButtonDemo />
          <TextInputDemo />
          <SurfaceDemo />
          <RippleDemo />
          <BottomNavDemo />
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
