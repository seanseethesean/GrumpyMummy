import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import type { Enquiry } from '../types/enquiry'
import { db } from './firebase'

const enquiriesCollection = collection(db, 'enquiries')

export const submitEnquiry = (payload: Omit<Enquiry, 'id' | 'createdAt'>) =>
  addDoc(enquiriesCollection, {
    ...payload,
    createdAt: serverTimestamp(),
  })
