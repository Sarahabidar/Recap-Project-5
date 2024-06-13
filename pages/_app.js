import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/Components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data);
  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
