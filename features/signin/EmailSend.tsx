"use client";
import { FC, memo } from "react";
import { useRouter } from "next/navigation";
import { BaseFrame, SimpleLink, TextButton, Label } from "@/shared";
import { Box, Stack } from "@mui/material";

const EmailSendComponent: FC = () => {
  const router = useRouter();

  return (
    <BaseFrame>
      <Box sx={{ paddingBottom: 5 }}>
        <Label label={"Email was sent!"} variant={"h4"} align={"center"} />
      </Box>
      <Stack spacing={2}>
        <TextButton
          label={"sign in page"}
          onClick={() => router.push("/signin")}
          size={"large"}
          color={"primary"}
        />
        <SimpleLink
          label={"Haven't received an email? Send it again!"}
          onClick={() => router.push("/signin/reset")}
          color={"textPrimary"}
          variant={"body2"}
        />
      </Stack>
    </BaseFrame>
  );
};

export const EmailSend = memo(EmailSendComponent);
