import { getServerSession as g } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export function getServerSession() {
  return g(authOptions);
}
