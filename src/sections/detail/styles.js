import { StyleSheet } from "react-native";
import * as colors from "../../commons/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main
  },
  view: {
    margin: 20,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    width: 150,
    height: 225,
    resizeMode: "contain",
    backgroundColor: colors.grey,
    marginBottom: 20,
    marginRight: 20
  },
  info: {
    width: '45%'
  },
  title: {
    color: colors.white, 
    fontSize: 17,
    marginBottom: 15,
    fontWeight: "bold"
  },
  label: {
    color: colors.white, 
    fontSize: 15,
    marginBottom: 15
  }
});
