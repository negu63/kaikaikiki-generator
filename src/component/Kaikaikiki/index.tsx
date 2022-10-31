import AutoHeightImage from "../AutoHeightImage";

export default function Kaikaikiki() {
  return (
    <>
      <div>
        <AutoHeightImage
          width={40}
          maxWidth={300}
          src={"/kaikaikiki-basic.svg"}
          alt={"kaikai-kiki"}
        />
      </div>
    </>
  );
}
