import { getServerSession as getServerSessionNext } from "next-auth/next";
import { authOptions } from "./authOptions";

export function getServerSession() {
  return getServerSessionNext(authOptions);
}
