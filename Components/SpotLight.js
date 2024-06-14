import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
export default function SpotLight({
  image,
  artist,
  slug,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <h1>SpotLight ArtPiece</h1>
      <Image
        src={image}
        artist={artist}
        alt={artist}
        width={400}
        height={400}
      ></Image>
      <p>Artist:{artist}</p>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
