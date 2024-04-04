import {
  uploadBytes,
  ref,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { cloudStorage } from "./config";
// TODO: Create

export async function createFile(filePath, file) {
  const fileReference = ref(cloudStorage, filePath);
  // uploading file to server
  await uploadBytes(fileReference, file);
  // gettting the URL
  return await getDownloadURL(fileReference);
}

//TODO: Delete

export async function deleteFile(filePath) {
  let payload = { error: null, loading: true };
  try {
    const fileReference = ref(cloudStorage, filePath);
    await deleteObject(fileReference);
    payload = { error: null, loading: false };
  } catch (error) {
    payload = { error: error, loading: false };
  }
  return payload;
}
