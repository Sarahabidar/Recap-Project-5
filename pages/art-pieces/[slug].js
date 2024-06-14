import ArtPieceDetails from "@/Components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDtailPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(data);
  const pieceIndex = data.findIndex((piece) => piece.slug === slug);
  const piece = data[pieceIndex];
  const isFavorite = artPiecesInfo.find(
    (artPiece) => artPiece.slug === piece.slug
  )?.isFav;

  return (
    <ArtPieceDetails
      onToggleFavorite={onToggleFavorite}
      isFavorite={isFavorite}
      slug={piece.slug}
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}
