"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function SearchForm() {
  const { register, handleSubmit } = useForm<{ search: string }>();
  const route = useRouter();

  const handleSearch = (data: { search: string }) => {
    route.push(`/book/search-book?keyword=${data.search}`);
  };
  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <input {...register("search")} className="search-input w-2xl" />
    </form>
  );
}
