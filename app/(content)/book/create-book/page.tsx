"use client";

import { RequestBookInfo } from "@/app/_types/book";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { getCategory, getPublisher, getSubCategory } from "./_api/getSelectOpt";
import Select from "./_components/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
type Category = {
  value: string;
  text: string;
  id: string;
};

export default function Page() {
  const { register, watch, setValue, handleSubmit, control } =
    useForm<RequestBookInfo>({ defaultValues: { publishedDate: "" } });
  const [category, setCategory] = useState<Category[]>([]);
  const [subCategory, setSubCategory] = useState<Category[]>([]);
  const [publisher, setPublisher] = useState<Category[]>([]);

  const watchCategory = watch("categoryId");

  useEffect(() => {
    (async () => {
      const categories = await getCategory();
      const publishers = await getPublisher();
      setValue("categoryId", categories[0]?.id);
      setCategory(categories);
      setValue("publisherId", publishers[0]?.id);
      setPublisher(publishers);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const subCategories = await getSubCategory(watchCategory);
      if (!subCategories) {
        return;
      }
      setValue("subCategoryId", subCategories[0]?.id);
      setSubCategory(subCategories);
    })();
  }, [watchCategory]);

  const createBook = (data: RequestBookInfo) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createBook)} className="flex flex-col">
        <label>책 제목</label>
        <input {...register("title")} type="text" />

        <label>카테고리</label>
        <Select register={register} label="categoryId" list={category} />

        <label>서브카테고리</label>
        <Select register={register} label="subCategoryId" list={subCategory} />

        <label>출판사</label>
        <Select register={register} label="publisherId" list={publisher} />

        <label>가격</label>
        <input type="number" />

        <label htmlFor="">포인트</label>
        <input type="number" />

        <label htmlFor="">출판일</label>
        <Controller
          name="publishedDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              onChange={(date) => {
                if (!date) return;
                onChange(dayjs(date).format("YYYY-MM-DD"));
              }}
              value={value}
            />
          )}
        />

        <label htmlFor="">설명</label>
        <textarea></textarea>

        <label htmlFor="">사진</label>
        <input type="image" />

        <button type="submit">등록</button>
      </form>
    </div>
  );
}
