import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useThemeDetector from "../../hooks/useThemeDetector";
import { $palette } from "../../recoil/atoms/paletteAtom";
import {
  $paletteHistory,
  $paletteIndex,
} from "../../recoil/atoms/paletteHistoryAtom";
import IconButton from "../IconButton";

export default function UndoButton() {
  const setPalette = useSetRecoilState($palette);
  const paletteHistory = useRecoilValue($paletteHistory);
  const [paletteIndex, setPaletteIndex] = useRecoilState($paletteIndex);
  const isDarkTheme = useThemeDetector();

  const src = isDarkTheme ? "/undo_white.svg" : "/undo.svg";

  function undo() {
    if (paletteIndex > 0) {
      setPalette(paletteHistory[paletteIndex - 1]);
      setPaletteIndex((index) => index - 1);
    }
  }

  return (
    <>
      <IconButton
        alt="undo button"
        iconSrc={src}
        onClick={() => {
          undo();
        }}
      />
    </>
  );
}
