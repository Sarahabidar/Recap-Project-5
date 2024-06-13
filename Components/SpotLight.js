import Image from "next/image";
export default function SpotLight({ image, artist }) {
  return (
    <>
      <h1>SpotLight ArtPiece</h1>
      <Image
        src={image}
        artist={artist}
        alt={artist}
        width={400}
        height={400}
      ></Image>
      <p>Artist:{artist}</p>
    </>
  );
}
