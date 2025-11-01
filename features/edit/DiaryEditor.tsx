"use client";
import { FC, memo } from "react";
import { NewWordList } from "./NewWordList";
import {
  ContainedButton,
  OutlineButton,
  Label,
  FormatDate,
  TextInputOutlined,
} from "@/shared";
import Stack from "@mui/material/Stack";
import { useDiaryEditor } from "./hooks/useDiaryEditor";

const DiaryEditorComponent: FC = () => {
  const {
    counter,
    control,
    initFields,
    addWord,
    deleteWord,
    diaryData,
    onSubmit,
    fields,
  } = useDiaryEditor();

  return (
    <>
      {diaryData ? (
        <>
          <FormatDate
            date={diaryData.date}
            formatType={"date"}
            variant={"body1"}
            align={"left"}
          />
          <div className={"spacer-24"} />
          <TextInputOutlined
            name={"title"}
            required={true}
            control={control}
            fullWidth={true}
            label={"Title"}
            multiline={false}
            rows={0}
            type={"text"}
          />
          <div className={"spacer-8"} />
          <Label
            label={`${counter} words`}
            variant={"caption"}
            align={"right"}
          />
          <div className={"spacer-8"} />
          <TextInputOutlined
            name={"content"}
            required={true}
            control={control}
            fullWidth={true}
            label={"Content"}
            multiline={true}
            rows={12}
            type={"text"}
          />
          <div className={"spacer-8"} />
          <NewWordList
            diaryId={diaryData.id}
            control={control}
            fields={fields}
            addWord={addWord}
            deleteWord={deleteWord}
          />
          <div className={"spacer-32"} />
          <Stack spacing={2} direction="row" justifyContent="center">
            <OutlineButton
              label={"clear"}
              size="mid"
              color={"inherit"}
              onClick={initFields}
            />
            <ContainedButton
              color={"primary"}
              onClick={onSubmit}
              label={"save"}
              size="mid"
            />
          </Stack>
        </>
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

export const DiaryEditor = memo(DiaryEditorComponent);
