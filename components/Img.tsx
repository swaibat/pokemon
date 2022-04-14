/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Skelton } from "./Loader/Skelton";

interface ImgProps {
  src: any;
  alt: string;
  height?: number | string;
  width?: number | string;
}

const Img = ({ src, alt, height, width }: ImgProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleImgLoad = () => {
    setImgLoaded(true);
  };
  return (
    <>
      <img
        height={height || 95}
        style={{ display: !imgLoaded ? "none" : "" }}
        width={width || 100}
        src={
          src.other.dream_world?.front_default ||
          src.other.home?.front_default ||
          src.other["official-artwork"]?.front_default ||
          src.front_shiny ||
          `https://via.placeholder.com/${width || 95}x${
            width || 100
          }.png/383838?text=N0 IMAGE`
        }
        alt={alt}
        onLoad={handleImgLoad}
      />
      {!imgLoaded && (
        <Skelton
          style={{
            height: height || 92,
            marginBottom: 3,
            width: width || 102,
          }}
        />
      )}
    </>
  );
};

export default Img;
