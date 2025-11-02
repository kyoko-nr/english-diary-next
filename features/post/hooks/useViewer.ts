import { currentDiaryAtom } from "@/shared";
import { useAtomValue } from "jotai";

export const useViewer = () => {
  const currentDiary = useAtomValue(currentDiaryAtom);

  const splited = currentDiary?.content.split(/[\s]/);
  const count = splited?.filter((w: string) => w !== "").length;

  const onDelete = (diaryId: string) => console.log("delete diary");

  return {
    onDelete,
    diary: currentDiary,
    count,
  };
};
