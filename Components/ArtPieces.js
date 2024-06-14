import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import ArtPiecePreview from "./ArtPiecePreview";
export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      {pieces.map((piece) => {
        const isFavorite = artPiecesInfo.find(
          (artPiece) => artPiece.slug === piece.slug
        )?.isFav;
        return (
          <>
            <ArtPiecePreview piece={piece} />
            <Link href={`/art-pieces/${piece.slug}`}>
              <h3> Title:{piece.name}</h3>
            </Link>
            <FavoriteButton
              slug={piece.slug}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </>
        );
      })}
    </>
  );
}
