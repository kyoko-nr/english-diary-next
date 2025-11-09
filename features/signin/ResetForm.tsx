"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FC, memo } from "react";
import {
  PlaneButton,
  Label,
  XsColumnGridContainer,
  TextInputStandard,
  SimpleLink,
  BaseFrame,
} from "@/shared";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/shared";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

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
      router.push("/signin/sent");
    } catch {
      setError("パスワードリセットの送信に失敗しました");
    }
  };

  return (
    <BaseFrame>
      <Label label={"Reset your password"} variant={"h4"} align={"center"} />
      <div className={"spacer-40"} />
      {error && (
        <>
          <Alert severity="error">{error}</Alert>
          <div className={"spacer-16"} />
        </>
      )}
      <XsColumnGridContainer>
        <TextInputStandard<IFormInput>
          name={"email"}
          control={control}
          label={"Email"}
          type={"email"}
          required
        />
      </XsColumnGridContainer>
      <div className={"spacer-32"} />
      <PlaneButton label={"send email"} onClick={handleSubmit(onSubmit)} />
      <div className={"spacer-16"} />
      <SimpleLink
        label={"Already have an account?"}
        onClick={() => router.push("/signin")}
        color={"textPrimary"}
        variant={"body2"}
      />
    </BaseFrame>
  );
};

export const ResetForm = memo(ResetFormComponent);
