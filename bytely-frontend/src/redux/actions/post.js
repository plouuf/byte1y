import firebase from 'firebase';
import { saveMediaToStorage } from './utils';
require('firebase/firebase-auth');
require('firebase/firestore');
import uuid from 'uuid-random';

export const createPost = (video, description) => (dispatch) =>
  new Promise((resolve, reject) => {
    saveMediaToStorage(
      video,
      `post/${firebase.auth().currentUser.uid}/${uuid()}`
    )
      .then((downloadURL) => {
        firebase
          .firestore()
          .collection('post')
          .add({
            creator: firebase.auth().currentUser.uid,
            downloadURL,
            description,
            likesCount: 0,
            commentsCount: 0,
            creationData: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => resolve())
          .catch(() => reject());
      })
      .catch(() => reject());
  });
