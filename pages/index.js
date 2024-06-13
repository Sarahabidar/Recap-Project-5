import ArtPieces from "@/Components/ArtPieces";
import SpotLight from "@/Components/SpotLight";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (!isLoading && !error) {
    const randomArtPiece = data[Math.floor(Math.random() * data.length)];
    console.log(randomArtPiece);
    return (
      <div>
        <SpotLight
          image={randomArtPiece.imageSource}
          artist={randomArtPiece.artist}
        ></SpotLight>
        <h1>List of all pieces</h1>
        <ArtPieces pieces={data}></ArtPieces>
      </div>
    );
  }
}
