import { Box, Grid } from "@mui/material";
import { useFieldArray, Control } from "react-hook-form";
import { TextInputDeletable } from "@/shared/components/input/TextInputDeletable";
import { Label } from "@/shared/components/label/Label";
import { AddIconButton } from "@/shared/components/button/AddIconButton";
import { Feature, WordForm } from "@/shared/types/types";
import { FC, memo } from "react";

type Props = {
  feature: Feature;
  fullWidth: boolean;
  diaryId: string;
  control: Control<WordForm>;
  wordIndex: number;
};

const AddibleContentComponent: FC<Props> = (props) => {
  const { fields, remove, append } = useFieldArray({
    control: props.control,
    name: `words.${props.wordIndex}.${props.feature}` as unknown as Parameters<
      typeof useFieldArray
    >[0]["name"],
  });

  const addFeature = () => append({ value: "" } as never);
  const deleteFeature = (featureIndex: number) => remove(featureIndex);

  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        <Label
          label={props.feature}
          variant="body1"
          align="left"
          capitalize={true}
          bold={true}
        />
        <AddIconButton feature={props.feature} onClick={addFeature} />
      </Box>
      <Grid container spacing={1}>
        {(fields as unknown as Array<{ id: string; value?: string }>).map(
          (field, index) => (
            <TextInputDeletable
              feature={props.feature}
              fullWidth={props.fullWidth}
              deleteFeature={deleteFeature}
              key={field.id}
              control={props.control}
              featureIndex={index}
              wordIndex={props.wordIndex}
              defaultValue={field.value}
            />
          ),
        )}
      </Grid>
    </>
  );
};

export const AddibleContent = memo(AddibleContentComponent);
