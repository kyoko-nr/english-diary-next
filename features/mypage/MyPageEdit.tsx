"use client";
import { FC, memo } from "react";
import { OutlineButton, ContainedButton, TextInputOutlined, Label } from "@/shared";
import Stack from "@mui/material/Stack";
import { useMyPageEdit } from "./hooks/useMyPageEdit";
import { AppFrame } from "../appframe/AppFrame";

const MyPageEditComponent: FC = () => {
  const { onSubmit, control, user } = useMyPageEdit();

  if (!user) {
    return null;
  }

  return (
    <AppFrame maxWidth="sm">
      <TextInputOutlined
        control={control}
        fullWidth={true}
        name={"username"}
        label={"User name"}
        type={"text"}
        required={true}
        multiline={false}
        rows={0}
      />
      <div className={"spacer-8"} />
      <TextInputOutlined
        control={control}
        fullWidth={true}
        name={"email"}
        label={"Email"}
        type={"email"}
        required={true}
        multiline={false}
        rows={0}
      />
      <div className={"spacer-8"} />
      <Label label={"Enter password to update email."} variant={"body2"} align={"left"} />
      <div className={"spacer-8"} />
      <TextInputOutlined
        control={control}
        fullWidth={true}
        name={"password"}
        label={"Password"}
        type={"password"}
        required={true}
        multiline={false}
        rows={0}
      />

      <div className={"spacer-40"} />
      <Stack spacing={2} direction="row" justifyContent="center">
        <OutlineButton
          size={"mid"}
          label={"cancel"}
          color={"inherit"}
          onClick={() => history.back()}
        />
        <ContainedButton size={"mid"} label={"save"} color={"primary"} onClick={onSubmit} />
      </Stack>
    </AppFrame>
  );
};

export const MyPageEdit = memo(MyPageEditComponent);
