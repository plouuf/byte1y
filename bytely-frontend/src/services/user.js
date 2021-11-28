import firebase from 'firebase';
import { saveMediaToStorage } from './utils';

export const saveUserProfileImage = (image) =>
  new Promise((resolve, reject) => {
    saveMediaToStorage(
      image,
      `profileImage/${firebase.auth().currentUser.uid}`
    ).then((res) => {
      firebase
        .firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .update({
          photoURL: res,
        })
        .then(() => resolve())
        .catch(() => reject());
    });
  });
