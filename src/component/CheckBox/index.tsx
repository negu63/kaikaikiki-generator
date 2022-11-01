import { SetterOrUpdater } from "recoil";

export default function CheckBox({
  label,
  state,
  setState,
}: {
  label: string;
  state: boolean;
  setState: SetterOrUpdater<boolean>;
}) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          id={label}
          style={{ accentColor: "black" }}
          onChange={(e) => {
            setState(e.target.checked);
          }}
          checked={state}
        />
        <label htmlFor={label}>{label}</label>
      </div>
    </>
  );
}
