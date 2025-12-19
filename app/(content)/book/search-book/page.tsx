import { SERVER_URL } from "@/app/_lib/api/common/config";
import { getServerFetch } from "@/app/_lib/api/server/fetch";
import ItemContainer from "./_components/ItemContainer";
import { Book } from "@/app/_types/book";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const data = (await getServerFetch(
    `${SERVER_URL}/api/search?keyword=${params.keyword}`
  )) as Book[];
  console.log(data);
  return (
    <>
      <ItemContainer books={data} />
    </>
  );
}
