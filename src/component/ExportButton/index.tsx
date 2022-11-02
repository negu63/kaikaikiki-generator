import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { $palette } from "../../recoil/atoms/paletteAtom";
import CustomImageLoader from "../../utils/customImageLoader";
import sha256 from "../../utils/sha256";
import TextButton from "../TextButton";

export default function ExportButton() {
  const palette = useRecoilValue($palette);
  const [hash, setHash] = useState("");

  const imageUrl = CustomImageLoader(palette)({
    src: "api/generated-image",
    width: 0,
  });

  useEffect(() => {
    (async () => {
      setHash((await sha256(imageUrl)).slice(0, 8));
    })();
  }, [imageUrl]);

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={imageUrl}
      download={`kaikai-kiki-${hash}.png`}
    >
      <TextButton label="Export" onClick={() => {}} />
    </a>
  );
}
