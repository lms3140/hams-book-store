"use client";

import { usePageStore } from "@/app/_store/usePageStore";

export function Header() {
  const { title } = usePageStore();
  return (
    <div className="h-20 border-gray-200 border-b flex pl-10 items-center">
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
}
