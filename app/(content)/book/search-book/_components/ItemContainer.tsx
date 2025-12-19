"use client";

import { Book } from "@/app/_types/book";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

type ItemContainerProps = {
  books: Book[];
};

const columnHelper = createColumnHelper<Book>();

export default function ItemContainer({ books }: ItemContainerProps) {
  const router = useRouter();

  const columns = useMemo(() => {
    return [
      columnHelper.accessor("bookId", {
        header: "ID",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("title", {
        header: "제목",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("authors", {
        header: "저자",
        cell: (info) => {
          const authors = info.getValue();
          if (!authors || authors.length === 0) return "-";
          if (authors.length === 1) return authors[0];
          return `${authors[0]} 외 ${authors.length - 1}명`;
        },
      }),

      columnHelper.accessor("price", {
        header: "가격",
        cell: (info) => info.getValue() + "원",
      }),

      columnHelper.accessor("publishedDate", {
        header: "등록일",
        cell: (info) => info.getValue(),
      }),

      columnHelper.display({
        id: "actions",
        header: "관리",
        cell: ({ row }) => (
          <button
            onClick={() => {
              const id = row.original.bookId;
              router.push(`/book/detail/${id}`);
            }}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            수정
          </button>
        ),
      }),
    ];
  }, []);

  const table = useReactTable({
    data: books,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-full w-full overflow-auto table-fixed border-separate border-spacing-0 flex justify-center">
      <table className="mb-20">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className=" z-20 sticky top-0 bg-slate-100 border-b"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="max-w-80 truncate px-2 border" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
