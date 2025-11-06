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
import { signUp } from "@/shared/firebase/firebaseAuth";
import { db } from "@/shared/firebase/firebaseClient";
import { Timestamp, setDoc, doc } from "firebase/firestore";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().label("User name").required(),
  email: yup.string().label("Email").required().email(),
  password: yup.string().label("Password").required().min(6),
  passwordConfirm: yup
    .string()
    .label("Password confirm")
    .oneOf([yup.ref("password")], "passwords don't match")
    .required()
    .min(6),
});

interface FormType {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignupFormComponent: FC = () => {
  const methods = useForm<FormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const { control } = methods;

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormType) => {
    setError(null);
    if (data.password !== data.passwordConfirm) {
      setError("パスワードが一致しません");
      return;
    }
    try {
      const cred = await signUp(data.email, data.password);
      const user = cred.user;
      const ts = Timestamp.now();
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: data.email,
        username: data.username,
        createdAt: ts,
        updatedAt: ts,
      });
      router.push("/signin");
    } catch (e) {
      // TODO: toastにする
      switch ((e as { code: string }).code) {
        case "auth/email-already-in-use":
          setError("このメールアドレスは既に使用されています");
          break;
        case "auth/invalid-email":
          setError("メールアドレスの形式が正しくありません");
          break;
        case "auth/weak-password":
          setError("パスワードが弱すぎます");
          break;
        default:
          setError("サインアップでエラーが発生しました");
      }
    }
  };

  return (
    <BaseFrame>
      <Label label={"Sign up for your English Diary!"} variant={"h4"} align={"center"} />
      <div className={"spacer-40"} />
      {error && (
        <>
          <Alert severity="error">{error}</Alert>
          <div className={"spacer-16"} />
        </>
      )}
      <XsColumnGridContainer>
        <TextInputStandard
          name="username"
          control={control}
          label={"User name"}
          type={"text"}
          required
        />
        <TextInputStandard name="email" control={control} label={"Email"} type={"email"} required />
        <TextInputStandard
          name="password"
          control={control}
          label={"Password"}
          type={"password"}
          required
        />
        <TextInputStandard
          name="passwordConfirm"
          control={control}
          label={"Password to confirm"}
          type={"password"}
          required
        />
      </XsColumnGridContainer>
      <div className={"spacer-32"} />
      <PlaneButton label={"sign up"} onClick={methods.handleSubmit(onSubmit)} />
      <div className={"spacer-16"} />
      <SimpleLink
        label={"Go to sign in page"}
        onClick={() => router.push("/signin")}
        color={"textPrimary"}
        variant={"body2"}
      />
    </BaseFrame>
  );
};

export const SignupForm = memo(SignupFormComponent);
