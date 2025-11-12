"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FC, memo } from "react";
import {
  PlaneButton,
  Label,
  TextInputStandard,
  SimpleLink,
  BaseFrame,
  SIGNIN_SENT_PATH,
  SIGNIN_PATH,
} from "@/shared";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/shared";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";

const schema = yup.object().shape({
  email: yup.string().label("Email").required().email(),
});

interface IFormInput {
  email: string;
}

const ResetFormComponent: FC = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: IFormInput) => {
    setError(null);
    try {
      await resetPassword(data.email);
      router.push(SIGNIN_SENT_PATH);
    } catch {
      setError("パスワードリセットの送信に失敗しました");
    }
  };

  return (
    <BaseFrame>
      <Stack spacing={3} alignItems={"center"}>
        <Label label={"Reset your password"} variant={"h4"} align={"center"} />
        {error && (
          <>
            <Alert severity="error">{error}</Alert>
          </>
        )}
        <TextInputStandard
          name={"email"}
          control={control}
          label={"Email"}
          type={"email"}
          required
        />
        <PlaneButton label={"send email"} onClick={handleSubmit(onSubmit)} />
        <SimpleLink
          label={"Already have an account?"}
          onClick={() => router.push(SIGNIN_PATH)}
          color={"textPrimary"}
          variant={"body2"}
        />
      </Stack>
    </BaseFrame>
  );
};

export const ResetForm = memo(ResetFormComponent);
