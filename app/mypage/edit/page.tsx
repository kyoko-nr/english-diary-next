"use client";

import { FC } from "react";
import { MyPageEdit } from "@/features";
import { RequireAuth } from "@/shared";

const MyPageEditPage: FC = () => {
  return (
    <RequireAuth>
      <MyPageEdit />
    </RequireAuth>
  );
};

export default MyPageEditPage;
