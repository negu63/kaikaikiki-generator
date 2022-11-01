import { atom } from "recoil";

const $checkOutline = atom({
  key: "checkOutline",
  default: true,
});

const $checkFace = atom({
  key: "checkFace",
  default: true,
});

const $checkMouth = atom({
  key: "checkMouth",
  default: true,
});

const $checkEyes = atom({
  key: "checkEyes",
  default: true,
});

const $checkLeaves = atom({
  key: "checkLeaves",
  default: true,
});

export { $checkOutline, $checkFace, $checkMouth, $checkEyes, $checkLeaves };
