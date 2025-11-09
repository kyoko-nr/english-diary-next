export { saveDiary, createDiary, fetchUserName } from "./diaryRepository";
export {
  signIn,
  signUp,
  signOutFrom,
  onAuthChange,
  resetPassword,
  deleteAccount,
  updateEmailWithPassword,
} from "./firebaseAuth";
export { db, auth, app } from "./firebaseClient";
export type { User, UserCredential } from "./firebaseAuth";
