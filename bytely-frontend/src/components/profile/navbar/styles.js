import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },

  displayName: {
    fontSize: 16,
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontWeight: '600'
  }
})

export default styles;