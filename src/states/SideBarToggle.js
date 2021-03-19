import { atom } from "recoil";

export const toggleSidebar = atom({
  key: "toggleSidebar",
  default: false,
});

export const toggleNotification = atom({
  key: "toggleNotification",
  default: false,
});

export const toggleOrderModal = atom({
  key: "toggleOrderModal",
  default: false,
});
