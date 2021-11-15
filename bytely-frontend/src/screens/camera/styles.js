import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },

  camera: {
    flex: 1,
    backgroundColor: 'black',
    aspectRatio: 9 / 16,
    
  },

  bottomBarContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginBottom: 20
  },

  recordButtonContainer: {
    flex: 1,
    marginHorizontal: 30
  },

  recordButton: {
    width: 70,
    height: 70,
    borderWidth: 6,
    borderRadius: 100,
    // borderColor: '#ff404090',
    borderColor: 'rgba(255, 255, 255, 0.45)',
    backgroundColor: '#ff4040',
    // backgroundColor: 'white',
    alignSelf: 'center',
  },

  galleryButton: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    width: 45,
    height: 45,
    marginLeft: 50
  },

  galleryButtonImage: {
    width: 45,
    height: 45,
  },

  sideBarContainer: {
    top: 60,
    marginHorizontal: 20,
    right: 0,
    position: 'absolute'
  },

  sideBarButton: {
    alignItems: 'center',
    marginBottom: 25,
  },

  iconText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5
  }


})

export default styles;