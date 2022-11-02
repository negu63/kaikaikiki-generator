import { atom } from "recoil";
import { Palette } from "../../types/palette";

const $paletteHistory = atom<Palette[]>({
  key: "paletteHistory",
  default: [
    {
      outline: "241f20",
      face: "f4ef15",
      mouthOutline: "251f20",
      mouth: "ec1d24",
      scleraLeft: "242020",
      scleraRight: "242020",
      pupilLeftTop: "fcfcfc",
      pupilRightTop: "fbfbfb",
      pupilLeftBottom: "faf9fa",
      pupilRightBottom: "f8f8f8",
      leaf1: "ef4039",
      leaf2: "f47d30",
      leaf3: "f9b734",
      leaf4: "f5f137",
      leaf5: "97d44a",
      leaf6: "37b460",
      leaf7: "40baa9",
      leaf8: "56baeb",
      leaf9: "3e83db",
      leaf10: "4c44a3",
      leaf11: "9e3da3",
      leaf12: "ed31a1",
    },
  ],
});

const $paletteIndex = atom({
  key: "paletteIndex",
  default: 0,
});

export { $paletteHistory, $paletteIndex };
