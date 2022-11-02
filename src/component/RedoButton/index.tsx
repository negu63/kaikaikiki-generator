import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { $palette } from "../../recoil/atoms/paletteAtom";
import {
  $paletteHistory,
  $paletteIndex,
} from "../../recoil/atoms/paletteHistoryAtom";
import IconButton from "../IconButton";

export default function RedoButton() {
  const setPalette = useSetRecoilState($palette);
  const paletteHistry = useRecoilValue($paletteHistory);
  const [paletteIndex, setPaletteIndex] = useRecoilState($paletteIndex);

  function redo() {
    if (paletteIndex + 1 < paletteHistry.length) {
      setPalette(paletteHistry[paletteIndex + 1]);
      setPaletteIndex((index) => index + 1);
    }
  }

  return (
    <>
      <IconButton
        alt="redo button"
        iconSrc="/redo.svg"
        onClick={() => {
          redo();
        }}
      />
    </>
  );
}