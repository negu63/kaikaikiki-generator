import Image from "next/image";

export default function AutoHeightImage({
  width = 30,
  maxWidth = 400,
  alt = "",
  priority = true,
  src,
}: {
  width?: Number;
  maxWidth?: Number;
  alt?: string;
  priority?: boolean;
  src: string;
}) {
  return (
    <>
      <div style={{ maxWidth: `${maxWidth}px`, width: `${width}vw` }}>
        <Image
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
