"use client";

import { TextField, Box, Grid } from "@mui/material";
import { RemoveIconButton } from "../button";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { memo } from "react";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  fullWidth: boolean;
  deleteFeature: (featureIndex: number) => void;
  featureIndex: number;
};

const TextInputDeletableComponent = <T extends FieldValues>({
  name,
  control,
  fullWidth,
  deleteFeature,
  featureIndex,
}: Props<T>) => {
  const { field } = useController({ name, control });

  return (
    <Grid size={fullWidth ? 12 : 3}>
      <Box display={"flex"}>
        <TextField {...field} variant="standard" required={false} fullWidth={fullWidth} />
        <RemoveIconButton featureIndex={featureIndex} onClick={deleteFeature} />
      </Box>
    </Grid>
  );
};

export const TextInputDeletable = memo(
  TextInputDeletableComponent,
) as typeof TextInputDeletableComponent;
