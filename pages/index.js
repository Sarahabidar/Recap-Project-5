import ArtPieces from "@/Components/ArtPieces";
import SpotLight from "@/Components/SpotLight";
import { useState, useEffect } from "react";

export default function SpotLightPage({
  data,
  isLoading,
  error,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState(null);
  useEffect(() => {
    if (data && data.length > 0) {
      const piece = data[Math.floor(Math.random() * data.length)];
      setRandomArtPiece(piece);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  if (randomArtPiece) {
    const isFavorite = artPiecesInfo.find(
      (artPiece) => artPiece.slug === randomArtPiece.slug
    )?.isFav;

    return (
      <div>
        <SpotLight
          image={randomArtPiece.imageSource}
          artist={randomArtPiece.artist}
          onToggleFavorite={onToggleFavorite}
          slug={randomArtPiece.slug}
          isFavorite={isFavorite}
        ></SpotLight>
      </div>
    );
  }
}
