"use client";

import { TextField } from "@mui/material";
import { memo } from "react";
import {
  Controller,
  FieldValues,
  useController,
  Control,
  FieldPath,
  FieldPathValue,
} from "react-hook-form";

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  required: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
  control?: Control<TFieldValues>;
  label: string;
  type: "text" | "email" | "password";
};

const TextInputStandardComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: Props<TFieldValues, TName>,
) => {
  const { fieldState } = useController<TFieldValues, TName>(props);
  const message = props.required
    ? fieldState.error
      ? fieldState.error.message
      : " "
    : "";

  return (
    <Controller<TFieldValues, TName>
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          variant={"standard"}
          helperText={message}
          fullWidth={true}
          error={fieldState.invalid}
          label={props.label}
          required={props.required}
          type={props.type}
        />
      )}
    />
  );
};

export const TextInputStandard = memo(
  TextInputStandardComponent,
) as typeof TextInputStandardComponent;
