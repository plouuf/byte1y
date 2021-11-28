import firebase from 'firebase';
require('firebase/firebase-storage');
require('firebase/firestore');

export const saveMediaToStorage = (media, path) =>
  new Promise((resolve, reject) => {
    const fileRef = firebase.storage().ref().child(path);

    fetch(media)
      .then((response) => response.blob())
      .then((blob) => fileRef.put(blob))
      .then((task) => task.ref.getDownloadURL())
      .then((downloadURL) => resolve(downloadURL))
      .catch(() => reject());
  });
