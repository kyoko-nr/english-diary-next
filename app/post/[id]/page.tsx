"use client";

import { FC } from "react";
import { Post } from "@/features";
import { RequireAuth } from "@/shared";

const PostPage: FC = () => {
  return (
    <RequireAuth>
      <Post />
    </RequireAuth>
  );
};

export default PostPage;
