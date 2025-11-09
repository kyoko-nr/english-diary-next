import { TextField, FormControl, MenuItem } from "@mui/material";
import { Control, useController, FieldValues, Path } from "react-hook-form";
import { PosIndexes } from "../../constants/Parts";
import { memo } from "react";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

const PosSelectComponent = <T extends FieldValues>({ name, control }: Props<T>) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <FormControl sx={{ width: "100%" }}>
      <TextField {...field} label="Parts of speech" required={false} variant="standard" select>
        {PosIndexes.map((p) => (
          <MenuItem value={p.key} key={p.key}>
            {p.value}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export const PosSelect = memo(PosSelectComponent) as typeof PosSelectComponent;
