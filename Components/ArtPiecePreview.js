import Image from "next/image";
import Link from "next/link";
export default function ArtPiecePreview({ piece }) {
  return (
    <li key={piece.slug}>
      <Image
        src={piece.imageSource}
        alt={piece.title}
        width={100}
        height={100}
      />

      <p>Artist: {piece.artist}</p>
    </li>
  );
}
