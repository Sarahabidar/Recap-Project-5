import ArtPiecePreview from "./ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.name}
          title={piece.name}
          artist={piece.artist}
          image={piece.imageSource}
        />
      ))}
    </>
  );
}
