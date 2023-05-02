import { createOpenGraphImage } from "@/utilities/createOpenGraphImage";

export default async function og() {
  return createOpenGraphImage({});
}

export const runtime = "edge";
