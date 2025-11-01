"use client";

import { useForm, FieldValues } from "react-hook-form";
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
  //   const dispatch = useDispatch()
  const methods = useForm<FormType>({
    // resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const { control } = methods;

  const router = useRouter();

  const onSubmit = (data: FormType) => {
    // dispatch(clearErrors())
    // dispatch(changeLoadingState(true))
    // dispatch(
    //   signUp({
    //     username: data.username,
    //     email: data.email,
    //     password: data.password,
    //     passwordConfirm: data.passwordConfirm,
    //   })
    // )
  };

  return (
    <BaseFrame>
      <Label
        label={"Sign up for your English Diary!"}
        variant={"h4"}
        align={"center"}
      />
      <div className={"spacer-40"} />
      <XsColumnGridContainer>
        <TextInputStandard
          name="username"
          control={control}
          label={"User name"}
          type={"text"}
          required
        />
        <TextInputStandard
          name="email"
          control={control}
          label={"Email"}
          type={"email"}
          required
        />
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
