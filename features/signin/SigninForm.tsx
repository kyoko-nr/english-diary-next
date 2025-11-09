"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FC, memo } from "react";
import {
  PlaneButton,
  SimpleLink,
  TextButton,
  TextInputStandard,
  XsColumnGridContainer,
} from "@/shared";
import { useRouter } from "next/navigation";
import { signIn } from "@/shared";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().label("Email").required().email(),
  password: yup.string().label("Password").required().min(6),
});

interface IFormInput {
  email: string;
  password: string;
}

const SigninFormComponent: FC = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: IFormInput) => {
    setError(null);
    try {
      await signIn(data.email, data.password);
      router.push("/edit");
    } catch (e) {
      // TODO: toastにする
      switch ((e as { code: string }).code) {
        case "auth/invalid-email":
        case "auth/wrong-password":
          setError("EmailまたはPasswordが正しくありません");
          break;
        case "auth/user-disabled":
          setError("このユーザーは無効です");
          break;
        case "auth/user-not-found":
          setError("ユーザーが見つかりません");
          break;
        case "auth/too-many-requests":
          setError("失敗が多すぎます。しばらくしてからお試しください");
          break;
        default:
          setError("サインインでエラーが発生しました");
      }
    }
  };

  return (
    <>
      {error && (
        <>
          <Alert severity="error">{error}</Alert>
          <div className={"spacer-16"} />
        </>
      )}
      <XsColumnGridContainer>
        <TextInputStandard
          name={"email"}
          control={control}
          label={"Email"}
          type={"email"}
          required
        />
        <TextInputStandard
          name={"password"}
          control={control}
          label={"Password"}
          type={"password"}
          required
        />
      </XsColumnGridContainer>
      <div className={"spacer-16"} />
      <SimpleLink
        label={"Forgot your password?"}
        onClick={() => router.push("/signin/reset")}
        color={"textPrimary"}
        variant={"body2"}
      />
      <div className={"spacer-32"} />
      <PlaneButton label={"sign in"} onClick={handleSubmit(onSubmit)} />
      <div className={"spacer-16"} />
      <TextButton
        label={"sign up"}
        onClick={() => router.push("/signup")}
        size={"large"}
        color={"primary"}
      />
    </>
  );
};

export const SigninForm = memo(SigninFormComponent);
