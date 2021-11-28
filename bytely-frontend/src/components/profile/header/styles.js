import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderColor: 'lightgray'
  },

  userText: {
    padding: 10,
    paddingBottom: 20,
    fontWeight: '600'
  },

  counterContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
    alignItems: 'center'
  },

  counterItemContainer: {
    flex: 1,
    alignItems: 'center',
    
  },

  counterNumberText: {
    fontWeight: 'bold',
    fontSize: 16
  },

  counterLabelText: {
    fontSize: 12,
    color: 'gray'
  },

  counterSeperator: {
    color: 'lightgray',
    fontSize: 22,
    fontWeight: '100'
  },

  profilePictureContainer: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'gray'
  },

  profilePicture: {
    height: 100,
    width: 100,
  },

})

export default styles;