"use client";
import { useEffect, FC, memo } from "react";
import { useRouter } from "next/navigation";
import { OutlineButton, Label, BaseFrame } from "@/shared";

const DeleteAccountConfirmComponent: FC = () => {
  const router = useRouter();

  const onDelete = () => {
    // dispatch(changeLoadingState(true))
    // dispatch(deleteAccount())
    console.info("Delete account clicked");
  };

  return (
    <BaseFrame>
      <Label
        label={"Are you sure to delete your account?"}
        variant={"h5"}
        align={"center"}
      />
      <div className={"spacer-40"} />
      <div className={"button-wrapper"}>
        <OutlineButton
          size={"mid"}
          label={"cancel"}
          color="inherit"
          onClick={() => router.push("/mypage")}
        />
        <OutlineButton
          size={"mid"}
          label={"delete"}
          color="error"
          onClick={() => onDelete()}
        />
      </div>
    </BaseFrame>
  );
};

export const DeleteAccountConfirm = memo(DeleteAccountConfirmComponent);
