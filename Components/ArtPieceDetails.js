import Image from "next/image";
export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <Image src={image} alt={title} width={100} height={100}></Image>
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}
