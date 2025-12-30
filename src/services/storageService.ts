import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './firebase'

export const uploadImage = async (file: File, folder = 'menu') => {
  const key = `${folder}/${Date.now()}-${file.name}`
  const storageRef = ref(storage, key)
  const snapshot = await uploadBytes(storageRef, file)
  return getDownloadURL(snapshot.ref)
}
