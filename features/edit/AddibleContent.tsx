import { Box, Grid } from "@mui/material";
import { useFieldArray, Control } from "react-hook-form";
import { TextInputDeletable, Label, AddIconButton, type Feature, DiaryForm } from "@/shared";
import { FC, memo } from "react";
import { ulid } from "ulid";

type Props = {
  feature: Feature;
  fullWidth: boolean;
  control: Control<DiaryForm>;
  wordIndex: number;
};

const AddibleContentComponent: FC<Props> = ({ feature, fullWidth, control, wordIndex }) => {
  const { fields, remove, append } = useFieldArray({
    control: control,
    name: `words.${wordIndex}.${feature}`,
  });

  const addFeature = () => append({ value: "", id: ulid() });
  const deleteFeature = (featureIndex: number) => remove(featureIndex);

  // sort by id
  const sortedFields = fields.toSorted((a, b) => a.id.localeCompare(b.id));

  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <Label label={feature} variant="body1" align="left" capitalize={true} bold={true} />
        <AddIconButton feature={feature} onClick={addFeature} />
      </Box>
      <Grid container spacing={1}>
        {sortedFields.map((field, index) => (
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
