import ArtPieces from "@/Components/ArtPieces";
import SpotLight from "@/Components/SpotLight";

export default function SpotLightPage({ data, isLoading, error }) {
  if (!isLoading && !error) {
    const randomArtPiece = data[Math.floor(Math.random() * data.length)];
    console.log(randomArtPiece);
    return (
      <div>
        <SpotLight
          image={randomArtPiece.imageSource}
          artist={randomArtPiece.artist}
        ></SpotLight>
      </div>
    );
  }
}
