import TextButton from "../TextButton";
import { $palette } from "../../recoil/atoms/paletteAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  $checkOutline,
  $checkFace,
  $checkMouth,
  $checkEyes,
  $checkLeaves,
} from "../../recoil/atoms/checkAtom";
import { Palette } from "../../types/palette";
import getRandomHex from "../../utils/getRandomHex";
import {
  $paletteHistory,
  $paletteIndex,
} from "../../recoil/atoms/paletteHistoryAtom";

export default function GenerateButton() {
  const outlineState = useRecoilValue($checkOutline);
  const faceState = useRecoilValue($checkFace);
  const mouthState = useRecoilValue($checkMouth);
  const eyesState = useRecoilValue($checkEyes);
  const leavesState = useRecoilValue($checkLeaves);

  const [palette, setPalette] = useRecoilState($palette);
  const [paletteHistory, setPaletteHistory] = useRecoilState($paletteHistory);
  const [paletteIndex, setPaletteIndex] = useRecoilState($paletteIndex);

  function generateColor() {
    const tmpPalette: Palette = JSON.parse(JSON.stringify(palette));
    const color1 = getRandomHex();
    const color2 = getRandomHex();

    if (outlineState)
      tmpPalette.outline = tmpPalette.mouthOutline = getRandomHex();

    if (faceState) tmpPalette.face = getRandomHex();

    if (mouthState) tmpPalette.mouth = getRandomHex();

    if (eyesState)
      Object.keys(tmpPalette).forEach((key) => {
        if (key.includes("sclera") || key.includes("pupil"))
          tmpPalette[key] = getRandomHex();
      });

    if (leavesState)
      if (Math.random() >= 0.5)
        Object.keys(tmpPalette).forEach((key) => {
          if (key.includes("leaf"))
            if (Number(key.replace("leaf", "")) % 2 == 1)
              tmpPalette[key] = color1;
            else tmpPalette[key] = color2;
        });
      else
        Object.keys(tmpPalette).forEach((key) => {
          if (key.includes("leaf")) tmpPalette[key] = getRandomHex();
        });

    const newPaletteHistory = [
      ...paletteHistory.slice(0, paletteIndex + 1),
      tmpPalette,
    ].slice(-10);

    setPalette(tmpPalette);
    setPaletteHistory(newPaletteHistory);
    setPaletteIndex(newPaletteHistory.length - 1);
  }

  return (
    <>
      <TextButton
        label="Generate"
        onClick={() => {
          generateColor();
        }}
      />
    </>
  );
}
