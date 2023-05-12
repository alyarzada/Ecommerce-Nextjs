import type { AppProps } from "next/app";
import Layout from "@/layout";

import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
