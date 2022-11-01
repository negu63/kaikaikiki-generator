import AutoHeightImage from "../AutoHeightImage";
import { useRecoilValue } from "recoil";
import { $palette } from "../../recoil/atoms/paletteAtom";

export default function Kaikaikiki() {
  const palette = useRecoilValue($palette);

  const loader = ({ src }: { src: string }) => {
    const query = Object.keys(palette).reduce((prev, cur) => prev + `${cur}=${palette[cur]}&`, "");
    return `/${src}?${query}}
`;
  };
  return (
    <>
      <AutoHeightImage
        loader={loader}
        src={"api/generated-image"}
        alt="kaikai-kiki"
        width={40}
        maxWidth={400}
      />
    </>
  );
}
