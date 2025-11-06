"use client";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
  type Unsubscribe,
  type User,
  type UserCredential,
} from "firebase/auth";
import { auth } from "./firebaseClient";

export const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const signUp = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signOutFrom = () => signOut(auth);

export const onAuthChange = (cb: (user: User | null) => void): Unsubscribe =>
  onAuthStateChanged(auth, cb);

export const resetPassword = (email: string) => sendPasswordResetEmail(auth, email);

export const deleteAccount = async () => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    return;
  }
  await deleteUser(currentUser);
};

export const updateEmailWithPassword = async (
  currentEmail: string,
  password: string,
  newEmail: string,
) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    return;
  }
  const credential = EmailAuthProvider.credential(currentEmail, password);
  await reauthenticateWithCredential(currentUser, credential);
  await updateEmail(currentUser, newEmail);
};

export type { User, UserCredential };
