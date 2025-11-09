"use client";

import { FC } from "react";
import { MyPage } from "@/features";
import { RequireAuth } from "@/shared";

const MyPagePage: FC = () => {
  return (
    <RequireAuth>
      <MyPage />
    </RequireAuth>
  );
};

export default MyPagePage;
