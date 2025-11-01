import { Typography, Box } from "@mui/material";
import { Label } from "@/shared/components/label/Label";
import { RowGridContainer } from "@/shared/components/container/RowGridContainer";
import { Addible, Feature } from "@/shared/types/types";
import { FC, memo } from "react";

type Props = {
  feature: Addible[];
  featureName: Feature;
};

const WordFeatureSynonymComponent: FC<Props> = ({ feature, featureName }) => {
  return (
    <div>
      <Label
        label={featureName}
        variant="body1"
        align="left"
        capitalize={true}
        bold={true}
      />
      <RowGridContainer spacing={1} justifyContent="flex-start">
        {feature.map((fe, index) => (
          <Box
            key={`${featureName}-${index}`}
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="body1"
              sx={{ marginRight: "8px", textIndent: "8px" }}
            >
              {fe.value}
            </Typography>
            {index !== feature.length - 1 && <span>/</span>}
          </Box>
        ))}
      </RowGridContainer>
    </div>
  );
};

export const WordFeatureSynonym = memo(WordFeatureSynonymComponent);
