"use client";

import { MyDictionary } from "@/features";
import { FC } from "react";
import { RequireAuth } from "@/shared";

const MyDictionaryPage: FC = () => (
  <RequireAuth>
    <MyDictionary />
  </RequireAuth>
);

export default MyDictionaryPage;
