import TagManager from "react-gtm-module";
import Head from "next/head";
import { useEffect } from "react";

// global style imports
import "normalize.css"; // override browser default styles
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    // source: https://www.learnbestcoding.com/post/9/easiest-way-to-integrate-google-analytics-with-react-js-and-next-js
    TagManager.initialize({ gtmId: "GTM-W2Z2Z93" });
  }, []);

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <noscript>You need to enable JavaScript to run this app.</noscript>

      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </>
  );
}
