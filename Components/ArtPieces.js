import Link from "next/link";
import ArtPiecePreview from "./ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <>
          <ArtPiecePreview key={piece.slug} piece={piece} />
          <Link href={`./pages/art-pieces/${piece.slug}`}>
            <h3> Title:{piece.name}</h3>
          </Link>
        </>
      ))}
    </>
  );
}
