import Head from "next/head";
// layouts
import French from "../../Layouts/French";
// components
import HeroHome from "../../components/HeroHome";
import ButtonLink from "../../components/ButtonLink";
import CardCtas from "../../components/CardCtas";
// data
import { homeCardsFrench } from "../../data/CTAMap";
import { FrenchBar } from "../../components/HomeBar";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Flacons vides stériles d’ALK Life Science SolutionsMC | Accueil
        </title>
        <meta
          name="description"
          content="Découvrez les flacons vides stériles de Life Science Solutions, une filiale d’ALK consacrée à offrir des produits en verre de haute qualité."
        />
        <link rel="canonical" href="https://www.sterilevialsolutions.com/fr/" />
      </Head>

      <HeroHome
        className="home__hero"
        h1="L’ATTENTION JUSQU’AUX MOINDRES DÉTAILS"
        text="Nos flacons respectent une norme de pureté qui préserve l'intégrité de leur contenu"
      >
        <ButtonLink href="/fr/our-product/" text="EXPLOREZ NOS FLACONS" />
      </HeroHome>
      <FrenchBar/>
      <CardCtas cards={homeCardsFrench} />
    </>
  );
}

Index.getLayout = function getlayout(page) {
  return <French>{page}</French>;
};
