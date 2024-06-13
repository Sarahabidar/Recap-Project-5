import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const router = useRouter();
  const handleBackButton = () => {
    router.back();
  };

  return (
    <div>
      <Image src={image} alt={title} width={100} height={100}></Image>
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <button onClick={handleBackButton}>Go Back to List</button>
    </div>
  );
}
