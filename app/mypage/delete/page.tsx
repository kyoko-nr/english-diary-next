"use client";

import { FC } from "react";
import { DeleteAccountConfirm } from "@/features";
import { RequireAuth } from "@/shared";

const DeleteAccountPage: FC = () => {
  return (
    <RequireAuth>
      <DeleteAccountConfirm />
    </RequireAuth>
  );
};

export default DeleteAccountPage;
