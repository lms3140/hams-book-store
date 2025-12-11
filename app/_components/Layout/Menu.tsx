"use client";

import { ReactNode, useEffect, useState } from "react";

// react-icons
import { LuBookCopy } from "react-icons/lu";
import { IoPeopleCircle } from "react-icons/io5";
import { HiChartBar } from "react-icons/hi2";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { useMenuStore } from "@/app/_store/useMenuStore";

type SideMenuItem = {
  title: string;
  icon: ReactNode;
  subItem: { title: string; path: string }[];
};

const menuList: SideMenuItem[] = [
  {
    title: "도서관리",
    icon: <LuBookCopy />,
    subItem: [{ title: "책 목록", path: "book" }],
  },
  {
    title: "회원관리",
    icon: <IoPeopleCircle />,
    subItem: [{ title: "회원 목록", path: "user" }],
  },
  {
    title: "주문관리",
    icon: <HiChartBar />,
    subItem: [{ title: "주문 대시보드", path: "order" }],
  },
];

export function Menu() {
  const { currentMenu, setMenu } = useMenuStore();
  const segment = useSelectedLayoutSegment();

  // URL에 따른 메뉴 상태 동기화
  // 404시에는 작동안함
  useEffect(() => {
    if (!segment) return;

    const index = menuList.findIndex((menu) =>
      menu.subItem.some((item) => segment.startsWith(item.path))
    );

    if (index !== -1) {
      setMenu(index);
    }
  }, [segment]);

  return (
    <div className="pr-10 pl-10 pt-5">
      <ul>
        {menuList.map((item, index) => (
          <li key={item.title} className="">
            <div
              onClick={() => {
                setMenu(index);
              }}
              className={`${
                currentMenu === index ? "bg-neutral-300" : ""
              } hover:bg-neutral-200 flex h-10 text-lg p-3.5 pl-10 items-center gap-2 rounded-2xl m-0.5`}
            >
              <span className="text-2xl">{item.icon}</span>
              {item.title}
            </div>
            <ul
              className={`overflow-hidden ${
                currentMenu === index ? "h-10" : "h-0"
              } ml-8`}
            >
              {item.subItem.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className={`${
                      segment === subItem.path ? "bg-neutral-300" : ""
                    } hover:bg-neutral-200 flex h-10 text-lg p-3.5 pl-10 items-center gap-2 rounded-2xl`}
                    href={`/${subItem.path}`}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
