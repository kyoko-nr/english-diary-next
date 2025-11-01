import { Typography, Stack } from "@mui/material";
import { Label } from "@/shared/components/label/Label";
import { Addible, Feature } from "@/shared/types/types";
import { FC, memo } from "react";

type Props = {
  feature: Addible[];
  featureName: Feature;
};

const WordFeatureComponent: FC<Props> = ({ feature, featureName }) => {
  return (
    <div>
      <Label
        label={featureName}
        variant="body1"
        align="left"
        capitalize={true}
        bold={true}
      />
      <Stack spacing={1}>
        {feature.map((fe, idx) => (
          <Typography
            key={`${featureName}-${idx}`}
            variant="body1"
            sx={{ textIndent: "8px", lineHeight: "1.2" }}
          >
            {fe.value}
          </Typography>
        ))}
      </Stack>
    </div>
  );
};

export const WordFeature = memo(WordFeatureComponent);
