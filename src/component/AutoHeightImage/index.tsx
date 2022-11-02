import Image, { ImageLoader } from "next/image";

export default function AutoHeightImage({
  loader,
  width = 30,
  maxWidth = 400,
  minWidth = 100,
  alt = "",
  priority = true,
  src,
}: {
  loader?: ImageLoader;
  width?: number;
  maxWidth?: number;
  minWidth?: number;
  alt?: string;
  priority?: boolean;
  src: string;
}) {
  return (
    <>
      <div
        style={{
          maxWidth: `${maxWidth}px`,
          minWidth: `${minWidth}px`,
          width: `${width}vw`,
        }}
      >
        <Image
          loader={loader}
          src={src}
          alt={alt}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority={priority}
        />
      </div>
    </>
  );
}
