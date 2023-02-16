import mePixel from "../../assets/images/me-pixel-beard.png";

export default function HeaderIcon() {
  return (
    <div className="flex items-center justify-center">
      <img src={mePixel} className="h-20 w-20" />
      <div className="flex items-center justify-center">
        <span className="text-xl text-yellow">{"<"}</span>
        <h1 className="mx-2 text-4xl text-lightBlue">bv</h1>
        <span className="text-xl text-yellow">{"/>"}</span>
      </div>
    </div>
  );
}
