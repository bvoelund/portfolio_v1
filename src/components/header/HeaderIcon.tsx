import { useEffect, useState } from "react";
import mePixel from "../../assets/images/me-pixel.png";
import mePixelJamming from "/src/assets/images/me-pixel-jamming-beard.png";
import mePixelJamming2 from "/src/assets/images/me-pixel-jamming-beard-2.png";

export default function HeaderIcon() {
  const [jammingImage, setJammingImage] = useState(mePixelJamming);

  useEffect(() => {
    const interval = setInterval(() => {
      if (jammingImage === mePixelJamming) {
        setJammingImage(mePixelJamming2);
      } else {
        setJammingImage(mePixelJamming);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [jammingImage]);

  return (
    <div className="flex items-center justify-center">
      <img src={jammingImage} className="h-20 w-20" />
      <div className="flex items-center justify-center">
        <span className="text-xl">{"<"}</span>
        <h1 className="mx-2 text-4xl text-lightBlue">bv</h1>
        <span className="text-xl">{"/>"}</span>
      </div>
    </div>
  );
}
