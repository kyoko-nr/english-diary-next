"use client";

import { Edit } from "@/features";
import { useParams } from "next/navigation";
import { FC } from "react";
import { RequireAuth } from "@/shared";

const EditDiaryPage: FC = () => {
  const params = useParams();
  const { id } = params;
  return (
    <RequireAuth>
      <Edit diaryId={id as string} />
    </RequireAuth>
  );
};

export default EditDiaryPage;
