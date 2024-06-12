import ArtPieces from "@/Components/ArtPieces";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data);
  if (!isLoading) {
    return (
      <div>
        <h1>Hello from Next.js</h1>
        <ArtPieces pieces={data}></ArtPieces>
      </div>
    );
  }
}
