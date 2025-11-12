import { Timestamp } from "firebase/firestore";

/**
 * A type of Diary for Firebase
 */
export type DiaryDoc = {
  id: string;
  date: Timestamp;
  title: string;
  content: string;
  words?: WordDoc[];
  updatedAt: Timestamp;
};

/**
 * A type of Addible for Firebase
 */
type AddibleDoc = {
  id: string;
  value: string;
};

/**
 * A type of Word for Firebase
 */
type WordDoc = {
  id: string;
  title: string;
  meanings: AddibleDoc[];
  synonyms: AddibleDoc[];
  examples: AddibleDoc[];
  partOfSpeech?: string;
  createdAt: Timestamp;
};
