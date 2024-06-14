import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/Components/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  // console.log(data);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const handleToggleFavorite = (slug) => {
    console.log("i am clicked");
    const foundArtPiece = artPiecesInfo.find(
      (artPiece) => artPiece.slug === slug
    );
    if (foundArtPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((obj) =>
          obj.slug === slug ? { ...obj, isFav: !obj.isFav } : obj
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug: slug, isFav: true }]);
    }
  };
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(artPiecesInfo);
  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        isLoading={isLoading}
        error={error}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
