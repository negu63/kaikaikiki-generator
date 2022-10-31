export default function Center({ children }: { children: JSX.Element }) {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </>
  );
}
