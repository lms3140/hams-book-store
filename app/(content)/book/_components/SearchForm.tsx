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
    <div className="flex justify-center py-6">
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="flex w-full max-w-2xl items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 focus-within:ring-indigo-400"
      >
        {/* 돋보기 아이콘 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>

        <input
          {...register("search")}
          placeholder="검색어를 입력하세요"
          className="flex-1 bg-transparent px-2 py-2 text-slate-800 placeholder-slate-400 focus:outline-none"
        />

        <button
          type="submit"
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          검색
        </button>
      </form>
    </div>
  );
}
