import Head from "next/head";
// layouts
import Main from "../Layouts/Main";
// components
import HeroHome from "../components/HeroHome";
import ButtonLink from "../components/ButtonLink";
import CardCtas from "../components/CardCtas";
// data
import { homeCards } from "../data/CTAMap";
import HomeBar from "../components/HomeBar";

export default function Index() {
  return (
    <>
      <Head>
        <title>Almaville Bamboo</title>
        <meta
          name="description"
          content="Learn about sterile empty vials from Life Science Solutions—a branch of ALK dedicated to providing high-quality glass products."
        />
        <link rel="canonical" href="https://www.sterilevialsolutions.com/" />
      </Head>

      <HeroHome
        className="home__hero"
        h1="Almaville Bamboo Hours"
        text="Monday, Wednesday, Friday 1:00pm-5:00pm/Tuesday, Thursday, Saturday 9:00am-5:00pm"
      >
        <ButtonLink href="/" text="Contact Us" />
      </HeroHome>
      <HomeBar />

      <CardCtas cards={homeCards} />
  
    </>
  );
}

Index.getLayout = function getlayout(page) {
  return <Main>{page}</Main>;
};
