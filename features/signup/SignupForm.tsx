"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FC, memo } from "react";
import {
  PlaneLargeButton,
  Label,
  XsColumnGridContainer,
  TextInputStandard,
  SimpleLink,
} from "@/shared";

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

interface IFormInput {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignupFormComponent: FC = () => {
  //   const dispatch = useDispatch()
  const { control, handleSubmit } = useForm<IFormInput>({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInput) => {
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
    <>
      <Label
        label={"Sign up for your English Diary!"}
        variant={"h4"}
        align={"center"}
      />
      <div className={"spacer-40"} />
      <XsColumnGridContainer>
        <TextInputStandard
          control={control}
          name={"username"}
          defaultValue={""}
          label={"User name"}
          type={"text"}
          required={true}
        />
        <TextInputStandard
          control={control}
          name={"email"}
          defaultValue={""}
          label={"Email"}
          type={"email"}
          required={true}
        />
        <TextInputStandard
          control={control}
          name={"password"}
          defaultValue={""}
          label={"Password"}
          type={"password"}
          required={true}
        />
        <TextInputStandard
          control={control}
          name={"passwordConfirm"}
          defaultValue={""}
          label={"Password to confirm"}
          type={"password"}
          required={true}
        />
      </XsColumnGridContainer>
      <div className={"spacer-32"} />
      <PlaneLargeButton label={"sign up"} onClick={handleSubmit(onSubmit)} />
      <div className={"spacer-16"} />
      <SimpleLink
        label={"Go to sign in page"}
        onClick={() => console.log("todo")}
        color={"textPrimary"}
        variant={"body2"}
      />
    </>
  );
};

export const SignupForm = memo(SignupFormComponent);
