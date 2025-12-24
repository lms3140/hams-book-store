import { cookies } from "next/headers";
import DefaultLayout from "../_components/DefaultLayout";
import { SERVER_URL } from "../_lib/api/common/config";
import { request } from "http";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  // console.log("[dev] cookie : " + cookieStore.get("accessToken"));

  return <DefaultLayout>{children}</DefaultLayout>;
}
