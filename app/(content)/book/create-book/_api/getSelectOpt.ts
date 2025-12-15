import { getClientFetch } from "@/app/_lib/api/client/fetch";
import {
  RespCategory,
  RespPublisher,
  RespSubCategory,
} from "../_types/category";

export const getCategory = async () => {
  const data = (await getClientFetch(
    "http://localhost:8080/category/lists"
  )) as RespCategory[];
  const newArr = data?.map((v: RespCategory) => ({
    value: v.categoryId,
    text: v.categoryName,
    id: v.categoryId,
  }));
  return newArr;
};
export const getPublisher = async () => {
  const data = (await getClientFetch(
    "http://localhost:8080/publisher/list"
  )) as RespPublisher[];
  console.log(data);
  const newArr = data?.map((v: RespPublisher) => ({
    value: v.publisherId,
    text: v.name,
    id: v.publisherId,
  }));
  return newArr;
};

export const getSubCategory = async (watchCategory: string) => {
  if (watchCategory === "" || watchCategory === undefined) return;
  const data = (await getClientFetch(
    `http://localhost:8080/category/sub-list?categoryId=${watchCategory}`
  )) as RespSubCategory[];
  const newArr = data?.map((v: RespSubCategory) => ({
    value: v.subcategoryId,
    text: v.subcategoryName,
    id: v.subcategoryId,
  }));

  return newArr;
};
