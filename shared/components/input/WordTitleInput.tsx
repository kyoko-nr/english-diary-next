import { TextField } from "@mui/material";
import { useController, Control, Path } from "react-hook-form";
import { FC, memo } from "react";
import { DiaryForm } from "../../types/types";

type Props = {
  control: Control<DiaryForm>;
  name: Path<DiaryForm>;
};

const WordTitleInputComponent: FC<Props> = ({ name, control }) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      {...field}
      variant={"standard"}
      helperText={error?.message}
      fullWidth={true}
      error={invalid}
      label="New Word"
      required={true}
      type={"text"}
    />
  );
};

export const WordTitleInput = memo(WordTitleInputComponent);
