"use client";

import { RequireAuth } from "@/shared/auth/RequireAuth";

export default function HomePage() {
  return <RequireAuth />;
}
