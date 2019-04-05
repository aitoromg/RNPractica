import { StyleSheet } from "react-native";
import * as colors from "../../commons/colors";

export default StyleSheet.create({
  container: { 
    paddingHorizontal: 0,
    paddingVertical: 0 
  },
  label: { 
    color: colors.white, 
    fontSize: 15,
    marginBottom: 7 
  },
  input: {
    color: colors.white,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    borderColor: colors.white,
    borderRadius: 5,
    borderWidth: 1.2,
    padding: 9
  },
  error: {
    color: colors.red,
    fontSize: 14,
    marginBottom: 10,
    opacity: 0.7,
    textAlign: "right"
  }
});
