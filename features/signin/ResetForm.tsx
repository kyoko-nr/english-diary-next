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

const schema = yup.object().shape({
  email: yup.string().label("Email").required().email(),
});

interface IFormInput {
  email: string;
}

const ResetFormComponent: FC = () => {
  // const dispatch = useDispatch()
  const { control, handleSubmit } = useForm<IFormInput>({
    // resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: IFormInput) => {
    // dispatch(changeLoadingState(true))
    // dispatch(resetPassword(data.email))
    console.info("reset submit", data);
  };

  return (
    <BaseFrame>
      <Label label={"Reset your password"} variant={"h4"} align={"center"} />
      <div className={"spacer-40"} />
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
