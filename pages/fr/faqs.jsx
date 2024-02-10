import Link from "next/link";
import Head from "next/head";
// layouts
import French from "../../Layouts/French";
// components
import Hero from "../../components/Hero";
import Accordion from "../../components/Accordion";
import { Text } from "../../components/UILib";
import { OrderRequestFrench } from "../../components/OrderRequest";

export default function Faqs() {
  return (
    <>
      <Head>
        <title>
          Flacons vides stériles d’ALK Life Science SolutionsMC | Foire aux
          questions (FAQ)
        </title>
        <meta
          name="description"
          content="Réponses aux questions fréquemment posées sur les flacons vides stériles d’ALK Life Science SolutionsMC "
        />
        <link
          rel="canonical"
          href="https://www.sterilevialsolutions.com/fr/faqs/"
        />
      </Head>
      <Hero className="faqs__background" h1="FOIRE AUX QUESTIONS" />

      <section className="faqs__accordions">
        <div className="container">
          <section>
            <Text type="p5" className="accordion__titles">
              Contact/commandes
            </Text>
            <Accordion
              className="accordion_question"
              h2="Comment puis-je communiquer avec ALK pour passer une commande ou poser une question?"
            >
              <Text className="accordion__boxstyle">
                <p>
                  Si vous êtes aux États-Unis, vous pouvez appeler au 800
                  325-7354 (du lundi au mercredi, de 7 h 30 à 17 h 30 HNC; le
                  jeudi et le vendredi, de 7 h 30 à 17 h HNC) ou envoyer un
                  courriel à{" "}
                  <Link
                    href="mailto:customerservice@alk.net"
                    className="faqs__a"
                  >
                    customerservice@alk.net
                  </Link>
                  .
                </p>
                <p>
                  Si vous êtes au Canada, vous pouvez appeler au 800 663-0972
                  (du lundi au vendredi, de 8 h 30 à 17 h HAE) ou envoyer un
                  courriel à{" "}
                  <Link
                    href="mailto:ca-customerservice@alk.net"
                    className="faqs__a"
                  >
                    ca-customerservice@alk.net
                  </Link>
                  .
                </p>
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Comment dois-je procéder pour commander des flacons?"
            >
              <Text className="accordion__boxstyle">
                <p>
                  Vous pouvez commander des flacons par téléphone pour qu’ils
                  soient livrés à votre établissement.
                </p>
                <p>
                  <strong>États-Unis</strong> Téléphone : 800 325-7354 (du lundi
                  au mercredi, de 7 h 30 à 17 h 30 HNC; le jeudi et le vendredi,
                  de 7 h 30 à 17 h HNC) <br />
                  Courriel :{" "}
                  <Link
                    href="mailto:customerservice@alk.net"
                    className="faqs__a"
                  >
                    customerservice@alk.net
                  </Link>
                  .
                </p>
                <p>
                  <strong>Canada</strong> Téléphone : 800 663-0972 (du lundi au
                  vendredi, de 8 h 30 à 17 h HAE) <br />
                  Courriel :{" "}
                  <Link
                    href="mailto:ca-customerservice@alk.net"
                    className="faqs__a"
                  >
                    ca-customerservice@alk.net
                  </Link>
                  .
                </p>
              </Text>
            </Accordion>
          </section>

          <hr className="line" />

          <section>
            <Text type="p5" className="accordion__titles">
              Nos flacons
            </Text>

            <Accordion
              className="accordion_question"
              h2="Existe-t-il un catalogue de produits disponible en téléchargement?"
            >
              <Text className="accordion__boxstyle">
                Vous pouvez{" "}
                <Link
                  href="/download/product-catalog-brochure-fr.pdf"
                  className="faqs__a"
                  target="_blank"
                >
                  télécharger un catalogue de produits ici
                </Link>
                .
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Les bouchons de vos flacons sont-ils exempts de latex?"
            >
              <Text className="accordion__boxstyle">
                Oui, les bouchons sont exempts de latex et de caoutchouc
                naturel.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Quelle est la température d’entreposage recommandée pour les flacons vides stériles (SEV)?"
            >
              <Text className="accordion__boxstyle">
                Nous recommandons d&apos;entreposer les SEV à la température
                ambiante.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="<span>Qu’est-ce que FluroTec<sup>MD</sup> et pourquoi cette technologie est-elle offerte seulement avec certains flacons?</span>"
            >
              <Text className="accordion__boxstyle">
                FluroTec<sup>MD</sup> est une barrière de protection située
                entre le produit pharmaceutique et le bouchon. La technologie
                FluroTec<sup>MD</sup> est offerte pour les tailles de flacons
                couramment demandées par les clients qui sont préoccupés par
                l&apos;interaction de leurs produits pharmaceutiques avec le
                bouchon en élastomère.{" "}
                <Link
                  href="mailto:ca-customerservice@alk.net"
                  className="faqs__a"
                >
                  Communiquez avec un représentant d’ALK
                </Link>{" "}
                pour de plus amples renseignements.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Fabriquez-vous à la fois des flacons avec un verre ambré (teinté) et clair?"
            >
              <Text className="accordion__boxstyle">
                Oui. Pour tous les modèles de flacons, à l&apos;exception du
                SEV20 (clair seulement), chaque flacons est offert avec un verre
                clair ou ambré (teinté).
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Que signifient les dimensions indiquées dans votre catalogue?"
            >
              <Text className="accordion__boxstyle">
                Les flacons sont dimensionnés en fonction de leur volume, mais
                les dimensions comprennent également la mesure du « diamètre
                extérieur », qui désigne le diamètre extérieur de la partie
                supérieure du flacon.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Quelles sont les personnalisations offertes pour les flacons d’ALK?"
            >
              <Text className="accordion__boxstyle">
                Vous pouvez commander différentes couleurs de bouchons et de
                sceaux, ainsi que différentes étiquettes.{" "}
                <Link
                  href="/download/product-catalog-brochure-fr.pdf"
                  className="faqs__a"
                  target="_blank"
                >
                  Apprenez-en davantage dans notre catalogue de produits
                </Link>
                .
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Vendez-vous d’autres produits?"
            >
              <Text className="accordion__boxstyle">
                Oui. L&apos;offre d&apos;ALK Life Science Solutions<sup>MC</sup>{" "}
                s&apos;est élargie pour inclure des produits additionnels, dont
                des diluants et des seringues.{" "}
                <Link
                  href="/download/product-catalog-brochure-fr.pdf"
                  className="faqs__a"
                  target="_blank"
                >
                  Téléchargez notre catalogue de produits
                </Link>{" "}
                pour découvrir notre gamme complète de produits.
              </Text>
            </Accordion>
          </section>

          <hr className="line" />

          <section>
            <Text type="p5" className="accordion__titles">
              Notre processus
            </Text>

            <Accordion
              className="accordion_question"
              h2="Quelles sont les exigences de la United States Pharmacopeia (USP) auxquelles répondent vos flacons vides stériles (SEV)?"
            >
              <Text className="accordion__boxstyle">
                Tous les SEV sont fabriqués en verre borosilicaté de type 1 de
                l&apos;USP et répondent aux exigences du chapitre &lt;660&gt; de
                l&apos;USP. De plus, les bouchons de nos flacons répondent aux
                exigences relatives aux fermetures de type 1 du chapitre
                &lt;381&gt; de l&apos;USP. Les configurations finies des SEV
                répondent aux exigences du chapitre &lt;1207&gt; de l&apos;USP.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Les flacons vides stériles (SEV) sont-ils produits conformément aux exigences réglementaires de l’Union européenne (UE)?"
            >
              <Text className="accordion__boxstyle">
                Nos SEV peuvent être vendus internationalement. Tous les SEV
                sont assemblés de manière aseptique après stérilisation,
                conformément aux réglementations de la Food and Drug
                Administration (FDA) des États-Unis, et répondent aux exigences
                de l&apos;USP concernant la stérilité et l&apos;absence
                d&apos;endotoxines. Nos flacons répondent également aux
                exigences de l&apos;Agence européenne des médicaments (EMA) et
                de Santé Canada.
                <p>
                  Tous les éléments de notre processus de fabrication sont régis
                  par un système de qualité robuste qui s&apos;applique à toutes
                  les fonctions et à tout le personnel à l&apos;échelle
                  mondiale. Ce système de qualité est supervisé et maintenu par
                  une équipe de gestion de la qualité qui s&apos;assure que tous
                  les produits pharmaceutiques, diluants et SEV fabriqués par
                  ALK répondent aux exigences des bonnes pratiques de
                  fabrication actuelles (BPFa), décrites dans le Code of Federal
                  Regulations (CFR) de la FDA, titre 21, parties 210, 211 et
                  600, ainsi qu&apos;à la directive Q10 de l&apos;International
                  Council for Harmonisation of Technical Requirements for
                  Pharmaceuticals for Human Use (ICH) concernant la sécurité, la
                  qualité, l&apos;identité, la puissance et la pureté.
                </p>
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Les flacons vides stériles (SEV) sont-ils assemblés et mis à l’essai aux États-Unis?"
            >
              <Text className="accordion__boxstyle">
                Oui, tous nos SEV sont assemblés, stérilisés et mis à
                l&apos;essai aux États-Unis et ils respectent les exigences de
                l&apos;USP.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Comment puis-je demander un certificat d’analyse?"
            >
              <Text className="accordion__boxstyle">
                Vous pouvez{" "}
                <Link
                  href="mailto:David.DeFeo@alk.net?subject=Certificate of Analysis Request"
                  className="faqs__a"
                >
                  demander un certificat d&apos;analyse ici
                </Link>
                .
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Comment puis-je obtenir de la documentation ou des dessins techniques des flacons pour ma soumission aux organismes de réglementation?"
            >
              <Text className="accordion__boxstyle">
                ALK peut vous fournir des renseignements pour répondre aux
                exigences réglementaires en matière de soumission (p. ex.
                présentation de nouveaux médicaments, demande
                d&apos;autorisation de mise sur le marché de produits
                biologiques, présentation abrégée de nouveaux médicaments).
                Veuillez&nbsp;
                <Link
                  href="mailto:ca-customerservice@alk.net"
                  className="faqs__a"
                >
                  communiquer avec un représentant d&apos;ALK
                </Link>
                &nbsp;pour obtenir des renseignements plus détaillés et
                connaître les frais associés.
              </Text>
            </Accordion>
          </section>
        </div>
      </section>

      <OrderRequestFrench />
    </>
  );
}

Faqs.getLayout = function getlayout(page) {
  return <French>{page}</French>;
};
