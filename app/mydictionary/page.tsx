"use client";

import { MyDictionary } from "@/features";
import { FC } from "react";
import { RequireAuth } from "@/shared/auth/RequireAuth";

const MyDictionaryPage: FC = () => (
  <RequireAuth>
    <MyDictionary />
  </RequireAuth>
);

export default MyDictionaryPage;
