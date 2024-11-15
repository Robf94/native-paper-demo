import * as React from "react";
import { Searchbar } from "react-native-paper";
import ThemedText from "../themes/ThemedText";

function SearchBarDemo() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <ThemedText variant="titleLarge">Search Bar Demo</ThemedText>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </>
  );
}

export default SearchBarDemo;
