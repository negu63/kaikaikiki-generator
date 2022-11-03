import useThemeDetector from "../../hooks/useThemeDetector";

export default function TextButton({
  label,
  onClick,
}: {
  label: string;
  onClick: Function;
}) {
  const isDarkTheme = useThemeDetector();

  const style = isDarkTheme
    ? {
        backgroundColor: "white",
        border: "1px solid white",
        color: "black",
      }
    : {
        backgroundColor: "black",
        border: "1px solid black",
        color: "white",
      };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onClick();
        }}
        style={{
          ...style,
          maxWidth: "150px",
          maxHeight: "52px",
          width: "20vw",
          height: "8vw",
          overflow: "clip",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        {label}
      </button>
    </>
  );
}
