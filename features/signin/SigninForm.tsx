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

const schema = yup.object().shape({
  email: yup.string().label("Email").required().email(),
  password: yup.string().label("Password").required().min(6),
});

interface IFormInput {
  email: string;
  password: string;
}

const SigninFormComponent: FC = () => {
  // const dispatch = useDispatch()
  const { control, handleSubmit } = useForm<IFormInput>({
    // resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: IFormInput) => {
    // dispatch(clearErrors())
    // dispatch(signIn({ email: data.email, password: data.password }))
    console.info("signin submit", data);
  };

  return (
    <>
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
