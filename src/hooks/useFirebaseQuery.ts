import { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/compat';
import firestore = firebase.firestore;

export function useFirestoreQuery(query: firestore.Query) {
  const [docs, setDocs] = useState<{ id: string }[]>();

  // Store current query in ref
  const queryRef = useRef(query);

  // Compare current query with the previous one
  useEffect(() => {
    // Use Firestore built-in 'isEqual' method
    // to compare queries
    if (!queryRef?.current?.isEqual(query)) {
      queryRef.current = query;
    }
  });

  // Re-run data listener only if query has changed
  useEffect(() => {
    if (!queryRef.current) {
      return;
    }
    // Subscribe to query with onSnapshot
    const unSubscribe = queryRef.current.onSnapshot((querySnapshot) => {
      // Get all documents from collection - with IDs
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Update state
      setDocs(data);
    });

    // Detach listener
    return () => {
      unSubscribe;
    };
  }, [queryRef]);

  return docs;
}
