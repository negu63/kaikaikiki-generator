import { defaultColor } from "./../../constants/defaultColor";
import { atom } from "recoil";
import { Palette } from "../../types/palette";

const $paletteHistory = atom<Palette[]>({
  key: "paletteHistory",
  default: [
    {
      outline: defaultColor.outline,
      face: defaultColor.face,
      mouthOutline: defaultColor.mouthOutline,
      mouth: defaultColor.mouth,
      scleraLeft: defaultColor.scleraLeft,
      scleraRight: defaultColor.scleraRight,
      pupilLeftTop: defaultColor.pupilLeftTop,
      pupilRightTop: defaultColor.pupilRightTop,
      pupilLeftBottom: defaultColor.pupilLeftBottom,
      pupilRightBottom: defaultColor.pupilRightBottom,
      leaf1: defaultColor.leaf1,
      leaf2: defaultColor.leaf2,
      leaf3: defaultColor.leaf3,
      leaf4: defaultColor.leaf4,
      leaf5: defaultColor.leaf5,
      leaf6: defaultColor.leaf6,
      leaf7: defaultColor.leaf7,
      leaf8: defaultColor.leaf8,
      leaf9: defaultColor.leaf9,
      leaf10: defaultColor.leaf10,
      leaf11: defaultColor.leaf11,
      leaf12: defaultColor.leaf12,
    },
  ],
});

const $paletteIndex = atom({
  key: "paletteIndex",
  default: 0,
});

export { $paletteHistory, $paletteIndex };
