"use client";
import { FC, memo } from "react";
import { BaseFrame, Logo } from "@/shared";
import { SigninForm } from "./SigninForm";

const SigninComponent: FC = () => {
  return (
    <BaseFrame>
      <Logo variant={"h4"} component={"h1"} />
      {/* <Scene /> */}
      <SigninForm />
    </BaseFrame>
  );
};

export const Signin = memo(SigninComponent);
