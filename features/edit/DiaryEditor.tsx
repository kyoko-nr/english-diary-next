"use client";
import { FC, memo } from "react";
import { NewWordList } from "./NewWordList";
import { ContainedButton, OutlineButton, Label, FormatDate, TextInputOutlined } from "@/shared";
import Stack from "@mui/material/Stack";
import { useDiaryEditor } from "./hooks/useDiaryEditor";
import { Box } from "@mui/material";

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
    isValid,
  } = useDiaryEditor();

  return (
    <>
      <Box sx={{ paddingBottom: 3 }}>
        <FormatDate
          date={diaryData?.date ?? new Date()}
          formatType={"date"}
          variant={"body1"}
          align={"left"}
        />
      </Box>
      <Stack spacing={1} sx={{ paddingBottom: 3 }}>
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
        <Label label={`${counter} words`} variant={"caption"} align={"right"} />
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
        <NewWordList control={control} fields={fields} addWord={addWord} deleteWord={deleteWord} />
      </Stack>
      <Stack spacing={2} direction="row" justifyContent="center">
        <OutlineButton label={"clear"} size="mid" color={"inherit"} onClick={initFields} />
        <ContainedButton
          color={"primary"}
          onClick={onSubmit}
          label={"save"}
          size="mid"
          disabled={!isValid}
        />
      </Stack>
    </>
  );
};

export const DiaryEditor = memo(DiaryEditorComponent);
