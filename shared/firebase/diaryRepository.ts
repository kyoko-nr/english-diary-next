"use client";

import { Timestamp, setDoc, doc, getDoc, collection, getDocs, deleteDoc, orderBy, query } from "firebase/firestore";
import { db } from "./firebaseClient";
import type { Diary, Word } from "@/shared/types/types";

const DOC_NAME_USERS = "users";
const DOC_NAME_DIARIES = "diaries";

// Firestore保存用の型
type WordDoc = {
  diaryId?: string;
  createdAt: Timestamp;
  title: string;
  meanings: { value: string }[];
  examples: { value: string }[];
  synonyms: { value: string }[];
  pos: string;
};

type DiaryDoc = {
  id: string;
  date: Timestamp; // 書いた日の0:00（旧仕様に合わせる）
  title: string;
  content: string;
  words?: WordDoc[];
  updatedAt: Timestamp;
};

export const getDiaryId = (uid: string): string => {
  const ref = collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES);
  return doc(ref).id;
};

export const saveDiary = async (uid: string, diary: Diary): Promise<void> => {
  const createdAt = Timestamp.fromDate(diary.date);
  const timestamp = Timestamp.now();

  const words: WordDoc[] | undefined = diary.words?.map((w) => ({
    diaryId: diary.id,
    createdAt: Timestamp.fromDate(w.createdAt),
    title: w.title,
    meanings: w.meanings,
    examples: w.examples,
    synonyms: w.synonyms,
    pos: w.pos,
  }));

  const toSave: DiaryDoc = {
    id: diary.id,
    date: createdAt,
    title: diary.title,
    content: diary.content,
    updatedAt: timestamp,
    words,
  };

  const ref = doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, diary.id);
  await setDoc(ref, toSave, { merge: true });
};

export const deleteDiary = async (uid: string, diaryId: string): Promise<void> => {
  const ref = doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, diaryId);
  await deleteDoc(ref);
};

export const fetchDiaries = async (uid: string): Promise<Diary[]> => {
  const diaries: Diary[] = [];
  const diaryCollRef = collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES);
  const q = query(diaryCollRef, orderBy("date", "desc"), orderBy("title", "desc"));
  const snapShot = await getDocs(q);
  snapShot.docs.forEach((d) => {
    const data = d.data() as DiaryDoc;
    const words: Word[] = [];
    data.words?.forEach((w) => {
      words.push({
        title: w.title,
        meanings: w.meanings,
        examples: w.examples,
        synonyms: w.synonyms,
        pos: w.pos,
        createdAt: w.createdAt.toDate(),
        diaryId: w.diaryId,
      });
    });
    diaries.push({
      id: data.id,
      date: data.date.toDate(),
      title: data.title,
      content: data.content,
      words,
    });
  });
  return diaries;
};

export const fetchUserName = async (uid: string): Promise<string | undefined> => {
  const userDoc = await getDoc(doc(db, DOC_NAME_USERS, uid));
  return (userDoc.data() as { username?: string } | undefined)?.username;
};

