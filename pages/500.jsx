import Head from "next/head";
// layouts
import Main from "../Layouts/Main";
// components
import { Heading } from "../components/UILib";
import ButtonLink from "../components/ButtonLink";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>ALK Life Science Solutions™ Sterile Empty Vials | 404</title>
        <meta name="description" content="404" />
        <link
          rel="canonical"
          href="https://www.sterilevialsolutions.com/404/"
        />
      </Head>

      <section className="error__404">
        <div className="container">
          <div className="error__content">
            <Heading
              type="h1"
              color="blue"
              align="center"
              className="error__h1"
            >
              <strong>500 Server Error</strong>
            </Heading>

            <p className="error__p">
              Sorry, something went wrong.
              <br />
              <br />
              Try and refresh this page or feel free to contact us if the
              problem persists.
            </p>

            <ButtonLink
              type="btn2"
              href="/"
              text="Home"
              className="error__link"
            />
          </div>
        </div>
      </section>
    </>
  );
}

Custom404.getLayout = function getlayout(page) {
  return <Main>{page}</Main>;
};
