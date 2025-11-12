import { loadable } from "jotai/utils";
import { useState } from "react";
import * as yup from "yup";
import { currentDiaryAtom } from "@/shared";
import { useAtomValue, useSetAtom } from "jotai";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDiary, currentUserInfoState, saveDiary } from "@/shared";
import { useRouter } from "next/navigation";
import { incrementEditVersionAction } from "@/shared/state/diaryState";
import { ulid } from "ulid";
import { DiaryForm } from "@/shared";

const addibleSchema = yup
  .array()
  .of(
    yup.object().shape({
      id: yup.string().required(),
      value: yup.string().required(),
    }),
  )
  .default([]);

const wordSchema = yup
  .array()
  .of(
    yup.object().shape({
      title: yup.string().label("New word").required().trim(),
      partOfSpeech: yup.string().label("Parts of speech"),
      meanings: addibleSchema,
      synonyms: addibleSchema,
      examples: addibleSchema,
      createdAt: yup.date().required(),
      id: yup.string().required(),
    }),
  )
  .default([]);

const schema = yup.object().shape({
  title: yup.string().label("Title").required(),
  content: yup.string().label("Content").required(),
  words: wordSchema,
});

const countWords = (content: string): number => {
  const splited = content.split(/[\s]/);
  const count = splited.filter((w: string) => w !== "").length;
  return count;
};

const loadableDiaryAtom = loadable(currentDiaryAtom);

/**
 * A hook of diary editor
 */
export const useDiaryEditor = () => {
  const router = useRouter();

  const [counter, setCounter] = useState(0);

  const user = useAtomValue(currentUserInfoState);

  const incrementEditVersion = useSetAtom(incrementEditVersionAction);

  const currentDiary = useAtomValue(loadableDiaryAtom);
  const diaryData = currentDiary.state === "hasData" ? currentDiary.data : undefined;

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { isValid },
  } = useForm<DiaryForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: diaryData?.title ?? "",
      content: diaryData?.content ?? "",
      words: diaryData?.words ?? [],
    },
  });
  const { fields, append, remove } = useFieldArray({ name: "words", control });

  const addWord = () =>
    append({
      title: "",
      id: ulid(),
      partOfSpeech: "",
      createdAt: new Date(),
      meanings: [],
      synonyms: [],
      examples: [],
    });
  const deleteWord = (index: number) => remove(index);

  const initFields = () => {
    setValue("title", "");
    setValue("content", "");
    setValue("words", []);
  };

  const onSubmit = async () => {
    if (!user) {
      return;
    }
    const values = getValues();
    if (diaryData?.id) {
      const id = await saveDiary(user.uid, {
        id: diaryData.id,
        title: values.title,
        content: values.content,
        words: values.words,
        date: diaryData.date,
      });
      incrementEditVersion();
      router.push(`/post/${id}`);
    } else {
      const id = await createDiary(user.uid, {
        title: values.title,
        content: values.content,
        words: values.words,
      });
      incrementEditVersion();
      router.push(`/post/${id}`);
    }
  };

  // TODO
  // useEffect(() => {
  //   const content = watch("content");
  //   setCounter(countWords(content));
  // }, [watch("content")]);

  return {
    counter,
    control,
    initFields,
    addWord,
    deleteWord,
    diaryData,
    onSubmit: handleSubmit(onSubmit),
    fields,
    isValid,
  };
};
