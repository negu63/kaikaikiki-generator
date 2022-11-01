import {
  $checkOutline,
  $checkFace,
  $checkMouth,
  $checkEyes,
  $checkLeaves,
} from "../../recoil/atoms/checkAtom";
import { useRecoilState } from "recoil";
import Margin from "../Margin";
import CheckBox from "../CheckBox";
import Center from "../Center";

export default function CheckBoxWrapper() {
  const [outlineState, setOutlineState] = useRecoilState($checkOutline);
  const [faceState, setFaceState] = useRecoilState($checkFace);
  const [mouthState, setMouthState] = useRecoilState($checkMouth);
  const [eyesState, setEyesState] = useRecoilState($checkEyes);
  const [leavesState, setLeavesState] = useRecoilState($checkLeaves);
  const bottomMargin = 1;
  const rightMargin = 0.3;

  return (
    <>
      <Center>
        <Margin bottom={bottomMargin} right={rightMargin}>
          <CheckBox
            label="Outline"
            state={outlineState}
            setState={setOutlineState}
          />
        </Margin>
        <Margin bottom={bottomMargin} right={rightMargin}>
          <CheckBox
            label="Leaves"
            state={leavesState}
            setState={setLeavesState}
          />
        </Margin>
      </Center>
      <Center>
        <Margin bottom={bottomMargin} right={rightMargin}>
          <CheckBox label="Face" state={faceState} setState={setFaceState} />
        </Margin>
        <Margin bottom={bottomMargin} right={rightMargin}>
          <CheckBox label="Mouth" state={mouthState} setState={setMouthState} />
        </Margin>
        <Margin bottom={bottomMargin} right={rightMargin}>
          <CheckBox label="Eyes" state={eyesState} setState={setEyesState} />
        </Margin>
      </Center>
    </>
  );
}
