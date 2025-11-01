import { TextField } from "@mui/material";
import {
  Controller,
  FieldValues,
  useController,
  FieldPath,
  Control,
} from "react-hook-form";

export type TextInputOutlinedProps<
  TFieldValues extends FieldValues = FieldValues,
> = {
  name: FieldPath<TFieldValues>;
  required: boolean;
  defaultValue: unknown;
  control?: Control<TFieldValues>;
  fullWidth: boolean;
  label: string;
  multiline: boolean;
  rows: number;
  type: "text" | "email" | "password";
};

export function TextInputOutlined<
  TFieldValues extends FieldValues = FieldValues,
>(props: TextInputOutlinedProps<TFieldValues>): JSX.Element {
  const { fieldState } = useController<TFieldValues>(props);
  const message = props.required
    ? fieldState.error
      ? fieldState.error.message
      : " "
    : "";

  return (
    <Controller<TFieldValues>
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          variant={"outlined"}
          helperText={message}
          fullWidth={props.fullWidth}
          error={fieldState.invalid}
          label={props.label}
          multiline={props.multiline}
          rows={props.rows}
          required={props.required}
          type={props.type}
          sx={{ borderRadius: 8, lineHeight: "1.4em" }}
        />
      )}
    />
  );
}
