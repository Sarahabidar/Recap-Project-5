import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) {
  const router = useRouter();
  const handleBackButton = () => {
    router.back();
  };

  return (
    <div>
      <Image src={image} alt={title} width={100} height={100}></Image>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <button onClick={handleBackButton}>Go Back to List</button>
    </div>
  );
}
