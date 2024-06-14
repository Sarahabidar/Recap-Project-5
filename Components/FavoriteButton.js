import Image from "next/image";
export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <button onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? (
        <Image src="/heart.svg" alt="Favorite art" width={20} height={20} />
      ) : (
        <Image
          src="/heart-outline.svg"
          alt="Favorite art"
          width={20}
          height={20}
        />
      )}
    </button>
  );
}
