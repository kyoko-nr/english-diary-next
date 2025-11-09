"use client";

import { FC } from "react";
import { Post } from "@/features";
import { RequireAuth } from "@/shared";
import { useParams } from "next/navigation";

const PostPage: FC = () => {
  const params = useParams<{ id: string }>();
  const { id } = params;
  return (
    <RequireAuth>
      <Post diaryId={id} />
    </RequireAuth>
  );
};

export default PostPage;
