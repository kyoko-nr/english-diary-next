"use client";

import { TextField } from "@mui/material";
import { memo } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  required?: boolean;
  fullWidth?: boolean;
  label?: string;
  multiline?: boolean;
  rows?: number;
  type?: "text" | "email" | "password";
};

const TextInputOutlinedComponent = <T extends FieldValues>({
  name,
  control,
  required = false,
  fullWidth = true,
  label,
  multiline = false,
  rows = 0,
  type = "text",
}: Props<T>) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control, rules: { required } });

  return (
    <TextField
      {...field}
      variant={"outlined"}
      helperText={error?.message}
      fullWidth={fullWidth}
      error={invalid}
      label={label}
      multiline={multiline}
      rows={rows}
      required={required}
      type={type}
      sx={{ borderRadius: 8, lineHeight: "1.4em" }}
    />
  );
};

export const TextInputOutlined = memo(
  TextInputOutlinedComponent,
) as typeof TextInputOutlinedComponent;
