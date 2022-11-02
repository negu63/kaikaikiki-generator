import AutoHeightImage from "../AutoHeightImage";
import { useRecoilValue } from "recoil";
import { $palette } from "../../recoil/atoms/paletteAtom";
import CustomImageLoader from "../../utils/customImageLoader";

export default function Kaikaikiki() {
  const palette = useRecoilValue($palette);

  return (
    <>
      <AutoHeightImage
        loader={CustomImageLoader(palette)}
        src={"api/generated-image"}
        alt="kaikai-kiki"
        width={40}
        maxWidth={400}
      />
    </>
  );
}
