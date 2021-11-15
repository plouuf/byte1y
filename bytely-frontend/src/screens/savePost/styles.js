import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white'
  },

  spacer: {
    flex: 1
  },

  formContainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  inputText: {
    paddingVertical: 10,
    marginRight: 20,
    flex: 1
  },

  mediaPreview: {
    aspectRatio: 9 / 16,
    backgroundColor: 'black',
    width: 60,
  },

  buttonContainer: {
    flexDirection: 'row',
    margin: 40,
  },

  cancelButton: {
    alignItems: 'center',
    flex: 1,
    borderColor: 'lightgray',
    borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10
  },
  postButton: {
    alignItems: 'center',
    flex: 1,
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor: '#00CED1',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10
  },

  cancelButtonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginLeft: 7
  },

  postButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginLeft: 7
  }

})

export default styles;