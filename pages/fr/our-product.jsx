import Head from "next/head";
// layouts
import French from "../../Layouts/French";
// components
import Hero from "../../components/Hero";
import { OrderRequestFrench } from "../../components/OrderRequest";
import { VialsFrench } from "../../components/Vials";
import { FluroTecFrench } from "../../components/FluroTec";

export default function OurProduct() {
  return (
    <>
      <Head>
        <title>
          Flacons vides stériles d’ALK Life Science SolutionsMC | Nos produits
        </title>
        <meta
          name="description"
          content="Parcourez la vaste gamme de flacons vides stériles offerts par ALK Life Science Solutions."
        />
        <link
          rel="canonical"
          href="https://www.sterilevialsolutions.com/fr/our-product/"
        />
      </Head>

      <Hero
        h1="LA PREUVE EST DANS LE PRODUIT"
        text="Flacons vides stériles d’ALK Life Science Solutions<sup>MC</sup> : fabriqués pour une pureté dans les moindres détails"
        className="product__hero"
      />

      <section className="product__vials">
        <div className="container">
          <div className="product__vials-wrapper">
            <VialsFrench />
          </div>
        </div>
      </section>

      <FluroTecFrench />

      <OrderRequestFrench />
    </>
  );
}

OurProduct.getLayout = function getlayout(page) {
  return <French>{page}</French>;
};
