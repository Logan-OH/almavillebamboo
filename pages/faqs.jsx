import Link from "next/link";
import Head from "next/head";
// layouts
import Main from "../Layouts/Main";
// components
import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import { Text } from "../components/UILib";
import OrderRequest from "../components/OrderRequest";

export default function Faqs() {
  return (
    <>
      <Head>
        <title>
          ALK Life Science Solutions Sterile Empty Vials | Frequently Asked
          Questions
        </title>
        <meta
          name="description"
          content="Answers to frequently asked questions about ALK Life Science Solutions™ Sterile Empty Vials."
        />
        <link
          rel="canonical"
          href="https://www.sterilevialsolutions.com/faqs/"
        />
      </Head>
      <Hero className="faqs__background" h1="FREQUENTLY ASKED QUESTIONS" />

      <section className="faqs__accordions">
        <div className="container">
          <section>
            <Text type="p5" className="accordion__titles">
              Contact/Ordering
            </Text>

            <Accordion
              className="accordion_question"
              h2="How do I contact ALK to order or ask questions?"
            >
              <Text className="accordion__boxstyle">
                <p>
                  If you are in the United States, you can call 800-325-7354
                  (Mon-Wed, 7:30 AM to 5:30 PM CST and Thu-Fri, 7:30 AM to 5:00
                  PM CST) or email{" "}
                  <Link
                    href="mailto:customerservice@alk.net"
                    className="faqs__a"
                  >
                    customerservice@alk.net
                  </Link>
                  .
                </p>
                <p>
                  If you are in Canada, you can call 800-663-0972 (Mon-Fri, 8:30
                  AM to 5:00 PM EDT) or email{" "}
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
              h2="How do I order vials?"
            >
              <Text className="accordion__boxstyle">
                <p>
                  You can order vials online or by phone to have them delivered
                  to you.
                </p>
                <p>
                  <strong>United States</strong> Call: 800-325-7354 (Mon-Wed,
                  7:30 AM to 5:30 PM CST and Thu-Fri, 7:30 AM to 5:00 PM CST)
                  Email:{" "}
                  <Link
                    href="mailto:customerservice@alk.net"
                    className="faqs__a"
                  >
                    customerservice@alk.net
                  </Link>
                  .
                </p>
                <p>
                  <strong>Canada</strong> Call: 800-663-0972 (Mon-Fri, 8:30 AM
                  to 5:00 PM EDT) Email:{" "}
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
              h2="How do I request samples?"
            >
              <Text className="accordion__boxstyle">
                It is as simple as filling out our short{" "}
                <Link
                  href="/request-sample-kit/"
                  className="faqs__a"
                  aria-label="sample kit request from"
                >
                  sample kit request form
                </Link>
                .
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="What is included in a sample kit?"
            >
              <Text className="accordion__boxstyle">
                A sample kit includes our full range of clear and amber vials.
              </Text>
            </Accordion>
          </section>
          <hr className="line" />
          <section>
            <Text type="p5" className="accordion__titles">
              About our vials
            </Text>
            <Accordion
              className="accordion_question"
              h2="Is there a product catalog available for download?"
            >
              <Text className="accordion__boxstyle">
                You can download a product catalog{" "}
                <Link href="/download/product-catalog-brochure.pdf">
                  <a
                    className="faqs__a"
                    target="_blank"
                    aria-label="download a product catalog"
                  >
                    here
                  </a>
                </Link>
                .
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Are the stoppers on your vials latex free?"
            >
              <Text className="accordion__boxstyle">
                Yes, the stoppers are free of natural rubber and latex.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="What is the recommended temperature for the storage of sterile empty vials (SEVs)?"
            >
              <Text className="accordion__boxstyle">
                We recommend storing SEVs at an ambient temperature.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="What is FluroTec® and why is it only available for some vials vs others?"
            >
              <Text className="accordion__boxstyle">
                FluroTec<sup>&reg;</sup> is a barrier between the drug product
                and the stopper. FluroTec<sup>&reg;</sup> is available for
                common vial sizes requested by customers who are concerned about
                interaction of their drug products with the elastomer stopper.{" "}
                <Link href="mailto:customerservice@alk.net" className="faqs__a">
                  Contact an ALK representative
                </Link>{" "}
                for more information.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Do you produce both tinted (amber) and clear vials? "
            >
              <Text className="accordion__boxstyle">
                Yes. For all vial models except SEV20 (clear only), each vial is
                available with either clear or amber (tinted) glass.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="What do the listed dimensions in your catalog mean? "
            >
              <Text className="accordion__boxstyle">
                Vials are sized based on volume, but the dimensions also include
                measurements for the “outer diameter.” This refers to the
                outside diameter of the mouth of the vial.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="What customizations are available for ALK vials?"
            >
              <Text className="accordion__boxstyle">
                You can order different cap colors, labels, and seal colors.
                Learn more in our{" "}
                <Link
                  href="/download/product-catalog-brochure.pdf"
                  className="faqs__a"
                  target="_blank"
                >
                  product catalog
                </Link>
                .
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Do you sell other products?"
            >
              <Text className="accordion__boxstyle">
                Yes. ALK Life Science Solutions<sup>&trade;</sup> has expanded
                to include additional products, including diluents and syringes.
                Download our&nbsp;
                <Link
                  href="/download/product-catalog-brochure.pdf"
                  className="faqs__a"
                  target="_blank"
                >
                  product catalog
                </Link>{" "}
                to see our full line of products.
              </Text>
            </Accordion>
          </section>
          <hr className="line" />
          <section>
            <Text type="p5" className="accordion__titles">
              About our process
            </Text>
            <Accordion
              className="accordion_question"
              h2="What US Pharmacopeia (USP) requirements do your sterile empty vials (SEVs) meet?"
            >
              <Text className="accordion__boxstyle">
                All SEVs are manufactured with USP type 1 borosilicate glass and
                meet USP &lt;660&gt; requirements.{" "}
                <Link
                  href="/download/sterile-summary-paper.pdf"
                  className="faqs__a"
                >
                  Read more
                </Link>{" "}
                about ALK Life Science Solutions<sup>&trade;</sup> and USP
                standards, including USP &lt;825&gt;. Additionally, our vial
                stoppers meet compendial requirements for type 1 closures under
                USP &lt;381&gt;. The finished SEV configurations meet USP
                &lt;1207&gt; requirements.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Are the sterile empty vials (SEVs) produced in accordance with EU regulatory requirements?"
            >
              <Text className="accordion__boxstyle">
                <p>
                  Our SEVs can be sold internationally. All SEVs are aseptically
                  assembled post sterilization, according to US FDA regulations,
                  and meet USP requirements for sterility and endotoxins. Our
                  vials also meet EU and Health Canada requirements.
                </p>
                <p>
                  All elements of our manufacturing process are driven by a
                  robust quality system that applies to all global functions and
                  personnel. This quality system is overseen and maintained by a
                  Quality Management Team that ensures that all drug products,
                  diluents, and SEVs produced by ALK meet Current Good
                  Manufacturing Practice (cGMP) requirements, described by the
                  FDA Code of Federal Regulations (CFR) Title 21 parts 210, 211,
                  and 600, and the International Conference on Harmonization of
                  Technical Requirements for Registration of Pharmaceuticals for
                  Human Use (ICH) Q10 guidance for safety, quality, identity,
                  potency, and purity.
                </p>
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="Are sterile empty vials (SEVs) assembled and tested in the United States?"
            >
              <Text className="accordion__boxstyle">
                Yes, all of our SEVs are assembled, sterilized, and tested in
                the United States and adhere to USP requirements.
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="How do I request a Certificate of Analysis?"
            >
              <Text className="accordion__boxstyle">
                You can{" "}
                <Link
                  href="mailto:ca-customerservice@alk.net"
                  className="faqs__a"
                >
                  request a Certificate of Analysis here
                </Link>
                .
              </Text>
            </Accordion>

            <Accordion
              className="accordion_question"
              h2="How do I obtain documentation and/or drawings of the vials for my regulatory agency submission?"
            >
              <Text className="accordion__boxstyle">
                ALK can supply you with information to meet regulatory
                submission requirements (ie, New Drug Applications [NDAs],
                Biologics License Applications [BLAs], Abbreviated New Drug
                Applications [ANDAs]). Please&nbsp;
                <Link href="mailto:customerservice@alk.net" className="faqs__a">
                  contact an ALK representative
                </Link>
                &nbsp;for more information on the details and fees associated.
              </Text>
            </Accordion>
          </section>
        </div>
      </section>

      <OrderRequest />
    </>
  );
}

Faqs.getLayout = function getlayout(page) {
  return <Main>{page}</Main>;
};
