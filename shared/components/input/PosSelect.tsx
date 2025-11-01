import { TextField, FormControl, MenuItem } from "@mui/material";
import { Controller, Control } from "react-hook-form";
import { PosOptions } from "@/shared/constants/Parts";
import { WordForm } from "@/shared/types/types";
import { FC, memo } from "react";

type Props = {
  control: Control<WordForm>;
  wordIndex: number;
  defautlValue?: string;
};

const PosSelectComponent: FC<Props> = (props) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Controller
        name={`words.${props.wordIndex}.pos`}
        control={props.control}
        defaultValue={props.defautlValue || ""}
        render={({ field }) => (
          <TextField
            {...field}
            label="Parts of speech"
            required={false}
            variant="standard"
            select
          >
            {PosOptions.map((p) => (
              <MenuItem value={p.key} key={p.key}>
                {p.value}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </FormControl>
  );
};

export const PosSelect = memo(PosSelectComponent);
