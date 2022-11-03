import { SetterOrUpdater } from "recoil";
import useThemeDetector from "../../hooks/useThemeDetector";

export default function CheckBox({
  label,
  state,
  setState,
}: {
  label: string;
  state: boolean;
  setState: SetterOrUpdater<boolean>;
}) {
  const isDarkTheme = useThemeDetector();

  const style = isDarkTheme
    ? { accentColor: "white" }
    : { accentColor: "black" };

  return (
    <>
      <div style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          id={label}
          style={{ ...style, cursor: "pointer" }}
          onChange={(e) => {
            setState(e.target.checked);
          }}
          checked={state}
        />
        <label style={{ cursor: "pointer" }} htmlFor={label}>
          {label}
        </label>
      </div>
    </>
  );
}
