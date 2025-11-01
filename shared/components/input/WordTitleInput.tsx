import { TextField } from "@mui/material";
import { Controller, useController, Control } from "react-hook-form";
import { WordForm } from "@/shared/types/types";
import { FC, memo } from "react";

type Props = {
  defaultValue: string | undefined;
  control: Control<WordForm>;
  wordIndex: number;
};

const WordTitleInputComponent: FC<Props> = (props) => {
  const { fieldState } = useController({
    name: `words.${props.wordIndex}.title`,
    control: props.control,
  });
  const message = fieldState.error ? fieldState.error.message : " ";

  return (
    <Controller
      name={`words.${props.wordIndex}.title`}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          variant={"standard"}
          helperText={message}
          fullWidth={true}
          error={fieldState.invalid}
          label="New Word"
          required={true}
          type={"text"}
        />
      )}
    />
  );
};

export const WordTitleInput = memo(WordTitleInputComponent);
