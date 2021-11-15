import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20
  },

  icon: {
    marginBottom: 30
  },

  textInput: {
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  button: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#00CED1',
    marginTop: 60
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
})

export default styles;