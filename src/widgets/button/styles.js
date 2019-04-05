import { StyleSheet } from "react-native";
import * as colors from "../../commons/colors";

export default StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 22,
    justifyContent: "center",
    backgroundColor: colors.grey
  },
  label: {
    color: colors.main,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
  }
});
