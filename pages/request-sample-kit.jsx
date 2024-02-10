import Head from "next/head";
// layouts
import Main from "../Layouts/Main";
// components
import Hero from "../components/Hero";
import SampleRequest from "../components/SampleRequest";
import { Heading } from "../components/UILib";
import CardCtas from "../components/CardCtas";
import FormSampleKit from "../components/FormSampleKit";
// data
import { sampleCards } from "../data/CTAMap";

export default function RequestSampleKit() {
  return (
    <>
      <Head>
        <title>
          ALK Life Science Solutions Sterile Empty Vials | Ordering and Samples
        </title>
        <meta
          name="description"
          content="Order ALK Life Science Solutions Sterile Empty Vials or request a Sample Kit to see the quality of our broad range of clear and amber vial options in person."
        />
        <link
          rel="canonical"
          href="https://www.sterilevialsolutions.com/request-sample-kit/"
        />
      </Head>

      <Hero
        h1="ORDERING & SAMPLES"
        text="ALK Life Science Solutions™ Sterile Empty Vials: Made for purity in every last detail"
        className="sample__hero"
      />

      <SampleRequest />

      <section id="form-info" className="sample__top">
        <div className="container">
          <section className="sample__videosec">
            <Heading className="sample__h2" type="h2">
              <strong>
                See what you will receive when you request a Sample Kit
              </strong>
            </Heading>

            <iframe
              className="sample__iframe"
              src="https://player.vimeo.com/video/736598246?h=466eb94dd7"
              title="What you will receive"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </section>
        </div>
      </section>

      <FormSampleKit />

      <CardCtas cards={sampleCards} />
    </>
  );
}

RequestSampleKit.getLayout = function getlayout(page) {
  return <Main>{page}</Main>;
};
