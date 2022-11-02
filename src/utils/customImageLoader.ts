import { ImageLoader } from "next/image";
import { Palette } from "../types/palette";

export default function CustomImageLoader(palette: Palette): ImageLoader {
  return ({ src }: { src: string }) => {
    const query = Object.keys(palette).reduce(
      (prev, cur) => prev + `${cur}=%23${palette[cur]}&`,
      ""
    );
    return `/${src}?${query}}
`;
  };
}
