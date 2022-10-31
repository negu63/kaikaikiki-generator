export default function CheckBox({ label }: { label: string }) {
  return (
    <>
      <div>
        <input type="checkbox" id={label} style={{ accentColor: "black" }} />
        <label htmlFor={label}>{label}</label>
      </div>
    </>
  );
}
