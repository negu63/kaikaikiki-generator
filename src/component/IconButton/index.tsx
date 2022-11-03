import AutoHeightImage from "../AutoHeightImage";

export default function IconButton({
  alt = "",
  iconSrc,
  onClick,
}: {
  alt: string;
  iconSrc: string;
  onClick: Function;
}) {
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          onClick();
        }}
      >
        <AutoHeightImage alt={alt} width={2} src={iconSrc} minWidth={32} />
      </div>
    </>
  );
}
