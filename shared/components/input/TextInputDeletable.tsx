"use client";

import { TextField, Box, Grid } from "@mui/material";
import { RemoveIconButton } from "@/shared/components/button";
import { Controller, Control, FieldPath } from "react-hook-form";
import { Feature, WordForm } from "@/shared/types/types";
import { FC, memo } from "react";

type Props = {
  feature: Feature;
  control: Control<WordForm>;
  fullWidth: boolean;
  deleteFeature: (featureIndex: number) => void;
  wordIndex: number;
  featureIndex: number;
  defaultValue: string | undefined;
};

const TextInputDeletableComponent: FC<Props> = (props) => {
  return (
    <Grid size={props.fullWidth ? 12 : 3}>
      <Box display={"flex"}>
        <Controller<WordForm>
          name={
            `words.${props.wordIndex}.${props.feature}.${props.featureIndex}.value` as unknown as FieldPath<WordForm>
          }
          control={props.control}
          defaultValue={props.defaultValue}
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              required={false}
              fullWidth={props.fullWidth}
            />
          )}
        />
        <RemoveIconButton
          featureIndex={props.featureIndex}
          onClick={props.deleteFeature}
        />
      </Box>
    </Grid>
  );
};

export const TextInputDeletable = memo(TextInputDeletableComponent);
