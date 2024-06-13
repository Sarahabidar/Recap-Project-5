import ArtPieceDetails from "@/Components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDtailPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(data);
  const pieceIndex = data.findIndex((piece) => piece.slug === slug);
  const piece = data[pieceIndex];

  return (
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}
