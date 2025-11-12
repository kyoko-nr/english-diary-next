"use client";
import { FC, memo } from "react";
import { useRouter } from "next/navigation";
import { OutlineButton, Label, SIGNIN_PATH, MYPAGE_PATH } from "@/shared";
import { deleteAccount } from "@/shared";
import { Stack } from "@mui/material";
import { AppFrame } from "../appframe";

const DeleteAccountConfirmComponent: FC = () => {
  const router = useRouter();

  const onDelete = async () => {
    try {
      await deleteAccount();
    } finally {
      router.push(SIGNIN_PATH);
    }
  };

  return (
    <AppFrame maxWidth="sm">
      <Stack spacing={5}>
        <Label label={"Are you sure to delete your account?"} variant={"h5"} align={"center"} />
        <Stack
          spacing={2}
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OutlineButton
            size={"mid"}
            label={"cancel"}
            color="inherit"
            onClick={() => router.push(MYPAGE_PATH)}
          />
          <OutlineButton size={"mid"} label={"delete"} color="error" onClick={() => onDelete()} />
        </Stack>
      </Stack>
    </AppFrame>
  );
};

export const DeleteAccountConfirm = memo(DeleteAccountConfirmComponent);
