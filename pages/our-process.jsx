import Head from "next/head";
// layouts
import Main from "../Layouts/Main";
// components
import Hero from "../components/Hero";
import { Heading, Text } from "../components/UILib";
import StandardsReportDownload from "../components/StandardsReportDownload";
import OrderRequest from "../components/OrderRequest";

export default function OurProcess() {
  return (
    <>
      <Head>
        <title>
          ALK Life Science Solutions Sterile Empty Vials| Our Process
        </title>
        <meta
          name="description"
          content="Learn about the rigorous standards implemented by ALK Life Sciences for the materials, assembly, and quality of our vials."
        />
        <link
          rel="canonical"
          href="https://www.sterilevialsolutions.com/our-process/"
        />
      </Head>

      <Hero
        h1="A process that ensures quality and purity in every vial"
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
                  Vials that meet our standards&nbsp;and&nbsp;yours
                </strong>
              </Heading>
              <Text type="p1">
                Rigorous control measures are employed to ensure the quality and
                consistency of ALK Life Science Solutions<sup>™</sup> vials at
                every step of the process—from the materials we use to the way
                each vial is assembled.
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
                <strong>Materials</strong>
              </Heading>
              <Text type="p1">
                <ul>
                  <li>
                    Our vial stoppers are composed of a latex- and rubber-free
                    chlorobutyl formulation
                  </li>
                  <li>
                    Sterile empty vials (SEVs) are aseptically assembled using
                    sterile components, including glass and stoppers, to ensure
                    final product sterility
                  </li>
                  <li>
                    Some of our SEVs come equipped with{" "}
                    <strong>
                      FluroTec<sup>&reg;</sup>
                    </strong>
                    —an extra barrier against extractables and leachables that
                    minimizes the risk of impurities, interactions, and medicine
                    degradation
                  </li>
                </ul>
              </Text>
            </section>

            <section className="process__category">
              <Heading type="h2" color="blue">
                <strong>Assembly</strong>
              </Heading>
              <Text type="p1">
                <ul>
                  <li>
                    Assembled in a Class 100 cleanroom environment in the United
                    States
                  </li>
                  <li>
                    All equipment undergoes regularly scheduled calibration,
                    maintenance, validation, testing, measuring, and utilization
                    procedures
                  </li>
                </ul>
              </Text>
            </section>

            <section className="process__category">
              <Heading type="h2" color="blue">
                <strong>Quality</strong>
              </Heading>
              <Text type="p1">
                <ul>
                  <li>
                    We strictly adhere to the FDA’s Current Good Manufacturing
                    Practices (cGMPs) regulations, mitigating the potential for
                    contamination that could impact the integrity of patients’
                    therapies
                    <ul>
                      <li>
                        These regulations tightly govern design, monitoring, and
                        control of manufacturing processes and facilities
                      </li>
                    </ul>
                  </li>
                  <li>
                    Our SEVs are all assembled, sterilized, and tested at our
                    plant in the United States and adhere to United States
                    Pharmacopeia (USP) requirements
                  </li>
                  <li>All SEVs are eligible to be sold internationally</li>
                </ul>
              </Text>
            </section>

            <section className="process__category">
              <StandardsReportDownload />
            </section>
          </article>
        </div>
      </section>

      <OrderRequest />
    </>
  );
}

OurProcess.getLayout = function getlayout(page) {
  return <Main>{page}</Main>;
};
