import { TextField } from "@mui/material";
import { memo } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

type Props<T extends FieldValues> = {
  required?: boolean;
  label?: string;
  type?: string;
  name: Path<T>;
  control: Control<T>;
};

const TextInputStandardComponent = <T extends FieldValues>({
  required,
  label,
  type,
  name,
  control,
}: Props<T>) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required },
  });

  return (
    <TextField
      {...field}
      variant={"standard"}
      helperText={error?.message}
      fullWidth={true}
      error={invalid}
      label={label}
      required={required}
      type={type}
    />
  );
};

export const TextInputStandard = memo(
  TextInputStandardComponent,
) as typeof TextInputStandardComponent;
