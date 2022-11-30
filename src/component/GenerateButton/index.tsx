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

  const generatePalette = (palette: Palette) => {
    return {
      ...palette,
      ...generateOutlineColor(outlineState),
      ...generateFaceColor(faceState),
      ...generateMouthColor(mouthState),
      ...generateEyesColor(eyesState),
      ...generateLeavesColor(leavesState),
    };
  };

  const enqueueNewHistory = (newPalette: Palette) => {
    return [...paletteHistory.slice(0, paletteIndex + 1), newPalette].slice(
      -10
    );
  };

  const calculatePaletteIndex = () => {
    return Math.min(paletteHistory.length + 1, 10);
  };

  const generateOutlineColor = (state = true) => {
    const color = getRandomHex();
    return state
      ? {
          outline: color,
          mouthOutline: color,
        }
      : {};
  };

  const generateFaceColor = (state = true) => {
    return state
      ? {
          face: getRandomHex(),
        }
      : {};
  };

  const generateMouthColor = (state = true) => {
    return state
      ? {
          mouth: getRandomHex(),
        }
      : {};
  };

  const generateEyesColor = (state = true) => {
    return state
      ? {
          scleraLeft: getRandomHex(),
          scleraRight: getRandomHex(),
          pupilLeftTop: getRandomHex(),
          pupilRightTop: getRandomHex(),
          pupilLeftBottom: getRandomHex(),
          pupilRightBottom: getRandomHex(),
        }
      : {};
  };

  const generateLeavesColor = (state = true) => {
    const color1 = getRandomHex();
    const color2 = getRandomHex();
    const isHalfColor = Math.random() >= 0.5;

    const colorSelector = (state = true, color: string) => {
      return state ? color : getRandomHex();
    };

    return state
      ? {
          leaf1: colorSelector(isHalfColor, color1),
          leaf2: colorSelector(isHalfColor, color2),
          leaf3: colorSelector(isHalfColor, color1),
          leaf4: colorSelector(isHalfColor, color2),
          leaf5: colorSelector(isHalfColor, color1),
          leaf6: colorSelector(isHalfColor, color2),
          leaf7: colorSelector(isHalfColor, color1),
          leaf8: colorSelector(isHalfColor, color2),
          leaf9: colorSelector(isHalfColor, color1),
          leaf10: colorSelector(isHalfColor, color2),
          leaf11: colorSelector(isHalfColor, color1),
          leaf12: colorSelector(isHalfColor, color2),
        }
      : {};
  };

  return (
    <>
      <TextButton
        label="Generate"
        onClick={() => {
          const newPalette = generatePalette(palette);

          setPalette(newPalette);
          setPaletteHistory(enqueueNewHistory(newPalette));
          setPaletteIndex(calculatePaletteIndex());
        }}
      />
    </>
  );
}
