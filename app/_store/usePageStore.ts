import { create } from "zustand";

type PageState = {
  title: string;
};

type PageAction = {
  setTitle: (title: PageState["title"]) => void;
};

export const usePageStore = create<PageState & PageAction>((set) => ({
  title: "관리자 페이지",
  setTitle: (title) => set(() => ({ title })),
}));
