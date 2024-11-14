// To allow global styles we can create a separate file and import it into each jsx file
// To pass in multiple style classes to a single component, put them inside an array

import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    gap: "10px",
  },

  "width-100": {
    width: "100%",
  },
  "heading-margins": {
    marginBottom: "10px",
  },
});

export default globalStyles;
