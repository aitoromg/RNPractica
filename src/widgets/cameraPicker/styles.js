import { StyleSheet } from "react-native";
import * as colors from "../../commons/colors";

export default StyleSheet.create({
  container: {
    height: 220,
    backgroundColor: colors.grey,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  labelContainer: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: "transparent",
    zIndex: 2
  },
  label: {
    color: colors.main
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 5,
    resizeMode: "cover",
    zIndex: 1
  }
});
