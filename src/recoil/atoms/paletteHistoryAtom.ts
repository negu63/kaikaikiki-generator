import { defaultColor } from "./../../constants/defaultColor";
import { atom } from "recoil";
import { Palette } from "../../types/palette";

const $paletteHistory = atom<Palette[]>({
  key: "paletteHistory",
  default: [
    defaultColor,
  ],
});

const $paletteIndex = atom({
  key: "paletteIndex",
  default: 0,
});

export { $paletteHistory, $paletteIndex };
