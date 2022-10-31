export default function TextButton({
  label,
  onClick,
}: {
  label: string;
  onClick: Function;
}) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          onClick();
        }}
        style={{
          maxWidth: '150px',
          maxHeight:'52px',
          width: "20vw",
          height: "8vw",
          overflow: "clip",
          backgroundColor: "white",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        {label}
      </button>
    </>
  );
}
