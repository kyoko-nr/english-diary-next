"use client";
import { FC, memo } from "react";
import { useRouter } from "next/navigation";
import { OutlineButton, Label } from "@/shared";
import { deleteAccount } from "@/shared/firebase/firebaseAuth";
import { Stack } from "@mui/material";
import { AppFrame } from "../appframe";

const DeleteAccountConfirmComponent: FC = () => {
  const router = useRouter();

  const onDelete = async () => {
    try {
      await deleteAccount();
      router.push("/signin");
    } catch (e) {
      // 失敗時は何もしない（TODO: エラー表示を追加する場合はここ）
    }
  };

  return (
    <AppFrame maxWidth="sm">
      <Label label={"Are you sure to delete your account?"} variant={"h5"} align={"center"} />
      <div className={"spacer-40"} />
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
          onClick={() => router.push("/mypage")}
        />
        <OutlineButton size={"mid"} label={"delete"} color="error" onClick={() => onDelete()} />
      </Stack>
    </AppFrame>
  );
};

export const DeleteAccountConfirm = memo(DeleteAccountConfirmComponent);
