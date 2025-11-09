import { selectedYMAtom, setSelectedYMAction, currentDiaryArchiveAtom } from "@/shared";
import { useAtomValue, useSetAtom } from "jotai";
import { loadable } from "jotai/utils";

const currentArchivesAtom = loadable(currentDiaryArchiveAtom);

export const useArchiveList = () => {
  const currentArchives = useAtomValue(currentArchivesAtom);
  const archives = currentArchives.state === "hasData" ? currentArchives.data : undefined;

  const selectedYM = useAtomValue(selectedYMAtom);
  const changeSelectedYM = useSetAtom(setSelectedYMAction);

  return {
    archives,
    selectedYM,
    changeSelectedYM,
  };
};
