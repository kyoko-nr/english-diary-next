"use client";

import { Edit } from "@/features";
import { useParams } from "next/navigation";
import { FC } from "react";

const EditPage: FC = () => {
  const params = useParams();
  const { id } = params;
  return <Edit diaryId={id as string} />;
};

export default EditPage;
