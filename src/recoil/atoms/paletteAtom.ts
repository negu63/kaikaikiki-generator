import { defaultColor } from "./../../constants/defaultColor";
import { atom } from "recoil";
import { Palette } from "../../types/palette";

const $palette = atom<Palette>({
  key: "palette",
  default: defaultColor,
});

export { $palette };
