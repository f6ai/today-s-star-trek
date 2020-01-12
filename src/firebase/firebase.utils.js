import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyB0lnKyg9rlZIr7xfInS4nXr1AdDvJs4us',
  authDomain: 'today-s-star-trek.firebaseapp.com',
  databaseURL: 'https://today-s-star-trek.firebaseio.com',
  projectId: 'today-s-star-trek',
  storageBucket: 'today-s-star-trek.appspot.com',
  messagingSenderId: '263157847919',
  appId: '1:263157847919:web:1c2b8c660fc3366b6d3a9a',
  measurementId: 'G-Q39ETQ5QYB'
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

// add data to firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // fire off the batch request, it's a promise
  return await batch.commit();
};
