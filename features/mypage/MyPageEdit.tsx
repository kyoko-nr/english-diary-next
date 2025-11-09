"use client";
import { FC, memo } from "react";
import { OutlineButton, ContainedButton, TextInputOutlined, Label } from "@/shared";
import { Stack } from "@mui/material";
import { useMyPageEdit } from "./hooks/useMyPageEdit";
import { AppFrame } from "../appframe/AppFrame";

const MyPageEditComponent: FC = () => {
  const { onSubmit, control, user } = useMyPageEdit();

  if (!user) {
    return null;
  }

  return (
    <AppFrame maxWidth="sm">
      <Stack spacing={2} sx={{ paddingBottom: 5 }}>
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
        <Label label={"Enter password to update email."} variant={"body2"} align={"left"} />
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
      </Stack>
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
