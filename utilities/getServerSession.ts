import { getServerSession as getServerSessionNext } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export function getServerSession() {
  return getServerSessionNext(authOptions);
}
