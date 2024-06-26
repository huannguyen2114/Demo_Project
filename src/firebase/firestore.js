// NPM packages
import { doc, collection } from "firebase/firestore";
import { addDoc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

// Project files
import { fireStore } from "./config";

// TODO: This file will do the simple CRUD operation for fireStore

// TODO: Create
//
// In order to create a document in firestore, we first find the path of the document, and then use addDoc function to add a new document
export async function createDocument(path, data) {
  let payload = { message: null, error: null, loading: true };
  try {
    const documentPath = collection(fireStore, path);
    await addDoc(documentPath, data);
    payload = { message: "created successfully", error: null, loading: false };
  } catch (error) {
    payload = { message: "created failed", error: error, loading: false };
  }

  return payload;
}

// In order to create a document with id, first find its path, but this time find with path and ID so we need to use doc() function. Then use setDoc to set the document
export async function createDocumentWithId(path, id, data) {
  let payload = { message: null, error: null, loading: true };
  try {
    const documentPath = doc(fireStore, path, id);
    await setDoc(documentPath, data);
    payload = { message: "created successfully", error: null, loading: false };
  } catch (error) {
    payload = { message: "created failed", error: error, loading: false };
  }
  return payload;
}

// TODO: Read
// In order to read the document with specific id, first find the document path (as always) and then use getDoc to get the document
export async function readDocument(path, id) {
  const payload = { data: {}, error: null, loading: true };
  try {
    const documentPath = doc(fireStore, path, id);
    const document = await getDoc(documentPath);
    payload.data = document.data();

    payload.loading = false;
    console.log("firestore read document", payload.data);
  } catch (error) {
    payload.error = error;
    payload.loading = false;
  }
  return payload;
}

// In order to read all the documents in a collection, first find the collection path (as always) and then use getDocs to get the documents,
export async function readCollection(path) {
  const collectionPath = collection(fireStore, path);
  const snapshot = await getDocs(collectionPath);
  // After get the documents, we need to convert them to an array
  const documents = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return documents;
}

// TODO: Update
// use setDoc
export async function updateDocument(path, id, data) {
  let payload = { message: null, error: null, loading: true };
  try {
    const documentPath = doc(fireStore, path, id);
    await setDoc(documentPath, data);
    payload = { message: "updated successfully", error: null, loading: false };
  } catch (error) {
    payload = { message: "updated failed", error: error, loading: false };
  }
  return payload;
}

// TODO: Delete
// use deleteDoc
export async function deleteDocument(path, id) {
  let payload = { message: null, error: null, loading: true };
  try {
    const documentPath = doc(fireStore, path, id);
    await deleteDoc(documentPath);
    payload = { message: "deleted successfully", error: null, loading: false };
  } catch (error) {
    payload = { message: "deleted failed", error: error, loading: false };
  }
  return payload;
}
