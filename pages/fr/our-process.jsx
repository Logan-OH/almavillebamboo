import Head from "next/head";
// layouts
import French from "../../Layouts/French";
// components
import Hero from "../../components/Hero";
import { Heading, Text } from "../../components/UILib";
import { OrderRequestFrench } from "../../components/OrderRequest";

export default function OurProcess() {
  return (
    <>
      <Head>
        <title>
          Flacons vides stériles d’ALK Life Science SolutionsMC | Notre
          processus
        </title>
        <meta
          name="description"
          content="Découvrez les normes rigoureuses mises en œuvre par ALK Life Sciences concernant les matériaux, l’assemblage et la qualité de nos flacons."
        />
        <link
          rel="canonical"
          href="https://www.sterilevialsolutions.com/fr/our-process/"
        />
      </Head>

      <Hero
        h1="UN PROCESSUS QUI GARANTIT LA QUALITÉ ET LA PURETÉ DE CHAQUE FLACON"
        className="process__hero"
      />

      <section className="process__top">
        <div className="container">
          <div className="process__top-content">
            <div className="process__vid-wrapper">
              <iframe
                className="process__iframe"
                src="https://player.vimeo.com/video/736598325?h=263d02a1f7"
                frameBorder="0"
                allowFullScreen
                title="title"
                width="100%"
                height="100%"
              />
            </div>
            <div className="process__top-text">
              <Heading type="h2" color="blue">
                <strong>
                  Des flacons conformes à vos exigences et aux nôtres
                </strong>
              </Heading>

              <Text type="p1">
                Nous employons des mesures de contrôle rigoureuses pour assurer
                la qualité et l’uniformité des flacons ALK Life Science
                Solutions<sup>MC</sup> à toutes les étapes du processus, des
                matériaux que nous utilisons à la façon dont chaque flacon est
                assemblé.
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className="process__main">
        <div className="container">
          <article className="process__article">
            <section className="process__category">
              <Heading type="h2" color="blue">
                <strong>Matériaux</strong>
              </Heading>

              <Text type="p1">
                <ul>
                  <li>
                    Les bouchons de nos flacons sont composés d’une formulation
                    à base de chlorobutyle sans latex ni caoutchouc.
                  </li>
                  <li>
                    Les flacons vides stériles (SEV, de l’anglais{" "}
                    <em>sterile empty vial</em>) sont assemblés de manière
                    aseptique à l’aide de composants stériles, notamment le
                    verre et les bouchons, pour garantir la stérilité du produit
                    final.
                  </li>
                  <li>
                    Certains de nos SEV sont équipés de la technologie{" "}
                    <strong>
                      FluroTec
                      <sup>MD</sup>
                    </strong>
                    , une barrière supplémentaire contre les substances
                    extractibles et lixiviables qui réduit au minimum le risque
                    d’impuretés, d’interactions et de dégradation des
                    médicaments.
                  </li>
                </ul>
              </Text>
            </section>

            <section className="process__category">
              <Heading type="h2" color="blue">
                <strong>Assemblage</strong>
              </Heading>

              <Text type="p1">
                <ul>
                  <li>
                    Assemblage aux États-Unis en salle propre de classe 100
                  </li>
                  <li>
                    Tout l’équipement est soumis à des procédures régulièrement
                    planifiées d’étalonnage, d’entretien, de validation,
                    d’essai, de mesure et d’utilisation.
                  </li>
                </ul>
              </Text>
            </section>

            <section className="process__category">
              <Heading type="h2" color="blue">
                <strong>Qualité</strong>
              </Heading>

              <Text type="p1">
                <ul>
                  <li>
                    Nous respectons formellement les réglementations de la Food
                    and Drug Administration (FDA) sur les bonnes pratiques de
                    fabrication actuelles (BPFa), réduisant par le fait même le
                    risque de contamination pouvant nuire à l’intégrité des
                    traitements administrés aux patients.
                    <ul>
                      <li>
                        Ces réglementations régissent étroitement la conception,
                        la surveillance ainsi que le contrôle des processus et
                        des installations de fabrication.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Nos SEV sont tous assemblés, stérilisés et mis à l’essai à
                    notre usine située aux États-Unis et respectent les
                    exigences de la United States Pharmacopeia (USP).
                  </li>
                  <li>Tous les SEV peuvent être vendus internationalement.</li>
                </ul>
              </Text>
            </section>
          </article>
        </div>
      </section>

      <OrderRequestFrench />
    </>
  );
}

OurProcess.getLayout = function getlayout(page) {
  return <French>{page}</French>;
};
