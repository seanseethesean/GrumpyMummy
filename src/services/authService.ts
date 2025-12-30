import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './firebase'

export const loginWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)
