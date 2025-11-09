import { loadable } from "jotai/utils";
import { useEffect } from "react";
import * as yup from "yup";
import { currentDiaryAtom } from "@/shared";
import { useAtomValue, useSetAtom } from "jotai";
import { useFieldArray, useForm } from "react-hook-form";
import { Word } from "@/shared";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDiary, currentUserInfoState, saveDiary } from "@/shared";
import { setCurrentDiaryIdAction } from "@/shared";
import { useRouter } from "next/navigation";

type DiaryForm = {
  title: string;
  content: string;
  words: Word[];
};
const schema = yup.object().shape({
  title: yup.string().label("Title").required(),
  content: yup.string().label("Content").required(),
  words: yup
    .array()
    .of(
      yup.object({
        title: yup.string().label("New word").required().trim(),
        meanings: yup.array(),
        synonyms: yup.array(),
        examples: yup.array(),
        pos: yup.string().label("pos"),
      }),
    )
    .defined(),
});

const countWords = (content: string): number => {
  const splited = content.split(/[\s]/);
  const count = splited.filter((w: string) => w !== "").length;
  return count;
};

const loadableDiaryAtom = loadable(currentDiaryAtom);

export const useDiaryEditor = () => {
  const router = useRouter();
  const user = useAtomValue(currentUserInfoState);

  const currentDiary = useAtomValue(loadableDiaryAtom);
  const data = currentDiary.state === "hasData" ? currentDiary.data : undefined;
  const diaryData = data ? data : { title: "", content: "", date: new Date(), id: undefined };

  const setCurrentDiaryId = useSetAtom(setCurrentDiaryIdAction);

  const { control, handleSubmit, setValue, getValues, reset } = useForm<DiaryForm>({
    // resolver: yupResolver(schema),
    defaultValues: {
      title: diaryData.title,
      content: diaryData.content,
      words: [],
    },
  });
  const { fields } = useFieldArray({ name: "words", control });

  // currentDiary が取得できたタイミングでフォームに反映
  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        content: data.content,
        words: [], // TODO
      });
    }
  }, [data, reset]);

  const addWord = () => console.log("add word");
  const deleteWord = () => console.log("delete word");

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
    if (diaryData.id) {
      const id = await saveDiary(user.uid, {
        id: diaryData.id,
        title: values.title,
        content: values.content,
        words: values.words,
        date: diaryData.date,
      });
      router.push(`/post/${id}`);
    } else {
      const id = await createDiary(user.uid, {
        title: values.title,
        content: values.content,
        words: values.words,
      });
      router.push(`/post/${id}`);
    }
  };

  // TODO
  // useEffect(() => {
  //   const content = watch("content");
  //   setCounter(countWords(content));
  // }, [watch("content")]);

  return {
    counter: countWords(getValues("content")),
    control,
    initFields,
    addWord,
    deleteWord,
    diaryData,
    onSubmit: handleSubmit(onSubmit),
    fields,
  };
};
