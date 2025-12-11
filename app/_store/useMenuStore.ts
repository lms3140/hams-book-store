import { create } from "zustand";

type MenuState = {
  currentMenu: number;
  currentPath: string;
};

type MenuAction = {
  setMenu: (menu: MenuState["currentMenu"]) => void;
  setPath: (path: MenuState["currentPath"]) => void;
};

export const useMenuStore = create<MenuState & MenuAction>((set) => ({
  currentMenu: 0,
  currentPath: "",
  setMenu: (menu) => set(() => ({ currentMenu: menu })),
  setPath: (path) => set(() => ({ currentPath: path })),
}));
