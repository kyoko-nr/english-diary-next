import {
  currentDiaryAtom,
  currentUserInfoState,
  setCurrentDiaryIdAction,
  EDIT_PATH,
  deleteDiary,
} from "@/shared";
import { useAtomValue, useSetAtom } from "jotai";
import { loadable } from "jotai/utils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const loadableDiaryAtom = loadable(currentDiaryAtom);

export const useViewer = (diaryId: string) => {
  const router = useRouter();
  const user = useAtomValue(currentUserInfoState);

  const setCurrentDiaryId = useSetAtom(setCurrentDiaryIdAction);
  const currentDiary = useAtomValue(loadableDiaryAtom);
  const diaryData = currentDiary.state === "hasData" ? currentDiary.data : undefined;

  const splited = diaryData?.content.split(/[\s]/);
  const count = splited?.filter((w: string) => w !== "").length;

  const onDelete = (diaryId: string) => {
    if (!user) {
      return;
    }
    deleteDiary(user.uid, diaryId);
    setCurrentDiaryId(undefined);
    router.push(EDIT_PATH);
  };

  useEffect(() => {
    setCurrentDiaryId(diaryId);
  }, []);

  return {
    onDelete,
    diary: diaryData,
    count,
  };
};
