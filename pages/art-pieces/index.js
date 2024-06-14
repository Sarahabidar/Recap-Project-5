import ArtPieces from "@/Components/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <ArtPieces
      pieces={data}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
