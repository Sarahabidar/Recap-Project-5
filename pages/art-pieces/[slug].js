import ArtPieceDetails from "@/Components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDtailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  if (slug === piece.slug) {
    return (
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.title}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
      ></ArtPieceDetails>
    );
  }
}
