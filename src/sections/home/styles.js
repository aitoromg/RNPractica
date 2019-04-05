import { StyleSheet } from "react-native";
import * as colors from "../../commons/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main
  },
  list: { paddingTop: 20 },
  noResults: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
    margin: 12
  }
});
