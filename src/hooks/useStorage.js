import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // References
    // Here we create reference to a file inside the default firebase storage booket with passed name
    const storageRef = projectStorage.ref(file.name);
    // We create reference to our firestore collection! in () is collection name!
    const collectionRef = projectFirestore.collection('images');

    // storageRef.put(file) takes file and puts in location we have created
    // .on fires a function on passed event
    storageRef.put(file).on(
      'state_changed',
      // we get acces to snap object (1st function)
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      // we also get access to error! (2nd function as an argument)
      (err) => {
        setError(err);
      },
      async () => {
        // AND 3rd FUNCTION THAT RUNS WHEN UPLOAD IS COMPLETED!
        const url = await storageRef.getDownloadURL(); // so after it completes we save donwload url
        // we use firestore timestamp we set up in config file!
        const createdAt = timestamp();

        collectionRef.add({ url, createdAt });
        // And write it to url state!
        setUrl(url);
      }
    );
  }, [file]);
  // And we return state we set!
  return { progress, url, error };
};

export default useStorage;
