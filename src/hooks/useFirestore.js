import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // .onSnapchot fires a function everytime change occurs inside a collection and one initially
    const unsub = projectFirestore // This returns a function that is used to unsubscribe from collection and we store it in unsub!
      .collection(collection)
      .orderBy('createdAt', 'desc') // this is how we order!
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          // this is how we get data and id from a document
          documents.push({ ...doc.data(), id: doc.id }); // We store properties of a document and id
        });
        setDocs(documents);
      });
    // This is a function known as cleanup Function that will unsub from a collection when we no longer use it
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
