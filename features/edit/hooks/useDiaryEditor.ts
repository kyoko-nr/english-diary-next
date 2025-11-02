import { loadable } from "jotai/utils";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { currentDiaryAtom } from "../../../shared/state/diaryState";
import { useAtomValue } from "jotai";
import { useFieldArray, useForm } from "react-hook-form";
import { WordForm } from "@/shared/types/types";

const ContentRegExp = /^[a-zA-Z0-9!-/:-@¥\[-`{-~\s]*$/;
const ContentErrMsg = "Please write 'English' diary!";
const schema = yup.object().shape({
  title: yup.string().label("Title").required(),
  content: yup.string().label("Content").required(),
  words: yup.array(
    yup.object({ title: yup.string().label("New word").required().trim() }),
  ),
});

const countWords = (content: string): number => {
  const splited = content.split(/[\s]/);
  const count = splited.filter((w: string) => w !== "").length;
  return count;
};

const loadableDiaryAtom = loadable(currentDiaryAtom);

export const useDiaryEditor = () => {
  const currentDiary = useAtomValue(loadableDiaryAtom);
  const [counter, setCounter] = useState(0);
  const diaryData =
    currentDiary.state === "hasData" ? currentDiary.data : undefined;

  const { control, handleSubmit, watch, setValue } = useForm<WordForm>({
    // resolver: yupResolver(schema),
    defaultValues: {
      title: diaryData?.title ?? "",
      content: diaryData?.content ?? "",
    },
  });
  const { fields, append, remove } = useFieldArray({ name: "words", control });

  const addWord = () => console.log("add word");
  const deleteWord = () => console.log("delete word");

  const initFields = () => {
    setValue("title", "");
    setValue("content", "");
    setValue("words", []);
    setCounter(0);
  };

  useEffect(() => {
    const content = watch("content");
    setCounter(countWords(content));
  }, [watch("content")]);

  return {
    counter,
    control,
    initFields,
    addWord,
    deleteWord,
    diaryData,
    onSubmit: () => console.log("submit"),
    fields,
  };
};
