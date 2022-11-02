import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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

  function undo() {
    if (paletteIndex > 0) {
      setPalette(paletteHistory[paletteIndex - 1]);
      setPaletteIndex((index) => index - 1);
    }
  }

  return (
    <>
      <div>{paletteIndex}</div>
      <div>{paletteHistory.length}</div>
      <IconButton
        alt="undo button"
        iconSrc="/undo.svg"
        onClick={() => {
          undo();
        }}
      />
    </>
  );
}
