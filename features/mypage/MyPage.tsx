"use client";
import { FC, memo } from "react";
import { useRouter } from "next/navigation";
import { Label, OutlineButton } from "@/shared";
import Stack from "@mui/material/Stack";
import { useAtomValue } from "jotai";
import { currentUserInfoState } from "@/shared/state/userInfoState";

const MyPageComponent: FC = () => {
  const user = useAtomValue(currentUserInfoState);
  const router = useRouter();

  if (!user) {
    return null;
  }

  const { username, email } = user;

  return (
    <>
      <Label label={"User name："} variant={"body2"} align={"left"} />
      <Label label={username} variant={"h5"} align={"left"} />
      <div className={"spacer-16"} />
      <Label label={"Email："} variant={"body2"} align={"left"} />
      <Label label={email} variant={"h5"} align={"left"} />
      <div className={"spacer-64"} />
      <Stack spacing={2} alignItems="center">
        <OutlineButton
          size={"large"}
          label={"edit"}
          color={"inherit"}
          onClick={() => router.push("/mypage/edit")}
        />
        <OutlineButton
          size={"large"}
          label={"delete account"}
          color={"error"}
          onClick={() => router.push("/mypage/delete")}
        />
      </Stack>
    </>
  );
};

export const MyPage = memo(MyPageComponent);
