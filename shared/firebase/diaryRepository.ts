"use client";

import {
  Timestamp,
  setDoc,
  doc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebaseClient";
import type { Diary, Word } from "../types/types";

const DOC_NAME_USERS = "users";
const DOC_NAME_DIARIES = "diaries";

type DiaryDoc = {
  id: string;
  date: Timestamp;
  title: string;
  content: string;
  words?: Word[];
  updatedAt: Timestamp;
};

export const createDiary = async (
  uid: string,
  diary: Omit<Diary, "id" | "date">,
): Promise<string> => {
  const diaryRef = doc(collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES));
  await setDoc(diaryRef, {
    id: diaryRef.id,
    date: Timestamp.now(),
    title: diary.title,
    content: diary.content,
    updatedAt: Timestamp.now(),
    words: diary.words,
  });
  return diaryRef.id;
};

export const saveDiary = async (uid: string, diary: Diary): Promise<string> => {
  const ref = doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, diary.id);
  await setDoc(
    ref,
    {
      id: diary.id,
      date: Timestamp.fromDate(diary.date),
      title: diary.title,
      content: diary.content,
      updatedAt: Timestamp.now(),
      words: diary.words,
    },
    { merge: true },
  );
  return diary.id;
};

export const deleteDiary = async (uid: string, diaryId: string): Promise<void> => {
  const ref = doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, diaryId);
  await deleteDoc(ref);
};

export const fetchDiaries = async (uid: string): Promise<Diary[]> => {
  const diaries: Diary[] = [];
  const diaryCollRef = collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES);
  const q = query(diaryCollRef, orderBy("date", "desc"));
  const snapShot = await getDocs(q);
  snapShot.docs.forEach((d) => {
    const data = d.data() as DiaryDoc;
    diaries.push({
      id: data.id,
      date: data.date.toDate(),
      title: data.title,
      content: data.content,
      words: data.words ?? [],
    });
  });
  return diaries;
};

export const fetchUserName = async (uid: string): Promise<string | undefined> => {
  const userDoc = await getDoc(doc(db, DOC_NAME_USERS, uid));
  return (userDoc.data() as { username?: string } | undefined)?.username;
};
