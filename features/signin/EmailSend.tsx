"use client";
import { FC, memo } from "react";
import { useRouter } from "next/navigation";
import { BaseFrame, SimpleLink, TextButton, Label } from "@/shared";

const EmailSendComponent: FC = () => {
  const router = useRouter();

  return (
    <BaseFrame>
      <Label label={"Email was sent!"} variant={"h4"} align={"center"} />
      <div className={"spacer-40"} />
      <TextButton
        label={"sign in page"}
        onClick={() => router.push("/signin")}
        size={"large"}
        color={"primary"}
      />
      <div className={"spacer-16"} />
      <SimpleLink
        label={"Haven't received an email? Send it again!"}
        onClick={() => router.push("/signin/reset")}
        color={"textPrimary"}
        variant={"body2"}
      />
    </BaseFrame>
  );
};

export const EmailSend = memo(EmailSendComponent);
