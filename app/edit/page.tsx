"use client";

import { Edit } from "@/features";
import { FC } from "react";
import { RequireAuth } from "@/shared";

const EditPage: FC = () => {
  return (
    <RequireAuth>
      <Edit />
    </RequireAuth>
  );
};

export default EditPage;
