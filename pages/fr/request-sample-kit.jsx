import Head from "next/head";
// layouts
import French from "../../Layouts/French";
// components
import Hero from "../../components/Hero";
import { OrderRequestFrench } from "../../components/OrderRequest";
import { Heading } from "../../components/UILib";
import CardCtas from "../../components/CardCtas";
import FormSampleKit from "../../components/FormSampleKit";
// data
import { sampleCardsFrench } from "../../data/CTAMap";

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
          href="https://www.sterilevialsolutions.com/fr/request-sample-kit/"
        />
      </Head>

      <Hero
        h1="COMMANDES ET ÉCHANTILLONS"
        text="Flacons vides stériles d’ALK Life Science SolutionsMC : fabriqués pour une pureté dans les moindres détails"
        className="sample__hero"
      />

      <OrderRequestFrench />

      <section id="form-info" className="sample__top">
        <div className="container">
          <section className="sample__videosec">
            <Heading className="sample__h2" type="h2">
              <strong>
                Voyez ce que vous recevrez si vous demandez une trousse
                d’échantillons
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

      <CardCtas cards={sampleCardsFrench} />
    </>
  );
}

RequestSampleKit.getLayout = function getlayout(page) {
  return <French>{page}</French>;
};
