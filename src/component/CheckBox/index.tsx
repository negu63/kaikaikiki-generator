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
      <div>
        <input
          type="checkbox"
          id={label}
          style={style}
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
