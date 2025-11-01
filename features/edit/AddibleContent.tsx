import { Box, Grid } from "@mui/material";
import { useFieldArray, Control, Path } from "react-hook-form";
import { TextInputDeletable } from "@/shared/components/input";
import { Label } from "@/shared/components/label";
import { AddIconButton } from "@/shared/components/button";
import { Feature, WordForm } from "@/shared/types/types";
import { FC, memo } from "react";

type Props = {
  feature: Feature;
  fullWidth: boolean;
  control: Control<WordForm>;
  wordIndex: number;
};

const AddibleContentComponent: FC<Props> = ({
  feature,
  fullWidth,
  control,
  wordIndex,
}) => {
  const { fields, remove, append } = useFieldArray({
    control: control,
    name: `words.${wordIndex}.${feature}`,
  });

  const addFeature = () => append({ value: "" });
  const deleteFeature = (featureIndex: number) => remove(featureIndex);

  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <Label
          label={feature}
          variant="body1"
          align="left"
          capitalize={true}
          bold={true}
        />
        <AddIconButton feature={feature} onClick={addFeature} />
      </Box>
      <Grid container spacing={1}>
        {fields.map((field, index) => (
          <TextInputDeletable
            key={field.id}
            name={`words.${wordIndex}.${feature}.${index}.value`}
            control={control}
            fullWidth={fullWidth}
            deleteFeature={deleteFeature}
            featureIndex={index}
          />
        ))}
      </Grid>
    </>
  );
};

export const AddibleContent = memo(AddibleContentComponent);
