"use client";

import { SignupForm } from "@/features/signup/SignupForm";
import { BaseFrame, setLoadingStateAction } from "@/shared";
import { useSetAtom } from "jotai";
import { FC, memo, useEffect } from "react";

const Signup: FC = () => {
  const setLoadingState = useSetAtom(setLoadingStateAction);

  useEffect(() => {
    setLoadingState(false);
  }, [setLoadingState]);

  return (
    <BaseFrame>
      <SignupForm />
    </BaseFrame>
  );
};

export default Signup;
