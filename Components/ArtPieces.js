import ArtPiecePreview from "./ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          title={piece.name}
          artist={piece.artist}
          image={piece.imageSource}
        />
      ))}
    </>
  );
}
