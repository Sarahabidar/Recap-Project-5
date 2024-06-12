import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li kex={title}>
      <Image src={image} alt={title} width={300} height={300} />
      <h3> Title:{title}</h3>
      <p>Artist: {artist}</p>
    </li>
  );
}
