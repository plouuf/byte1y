import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  mainContainer: {
    padding: 30,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 25,
    color: 'darkslategray',
    textAlign: 'center'
  },

  providerButton: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  providerLabel: {
    paddingRight: 20
  },

  bottomContainer: {
    backgroundColor: '#F8F8FF',
    padding: 20,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'flex-end'
  },

  signupText: {
    color: '#00CED1',
    fontWeight: 'bold',

  }
})

export default styles;